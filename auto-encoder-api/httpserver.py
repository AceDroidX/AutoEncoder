from flask import Flask, request, jsonify
import uuid
import queue
import traceback
import copy

prefix = '/api'

app = Flask('httpserver')
app.config['JSON_AS_ASCII'] = False


def runhttp(t, w, d):
    global taskqueue, workqueue, outqueue
    taskqueue = t
    workqueue = w
    outqueue = d
    app.run(host='0.0.0.0', port=8081)


@app.route(prefix+'/test')
def hello_world():
    return 'Hello World!'


@app.route(prefix+'/qsize')
def getQsize():
    return jsonify({'code': 0, 'msg': "", 'data': {'queue_size': workqueue.qsize()}})


@app.route(prefix+'/task')
def getTask():
    return jsonify({'code': 0, 'msg': "", 'task': taskqueue.getall()})


@app.route(prefix+'/queue')
def getQueue():
    return jsonify({'code': 0, 'msg': "", 'queue': workqueue.getall()})


@app.route(prefix+'/output')
def getOutput():
    tmp = copy.deepcopy(outqueue.getall())
    tmp.reverse()
    return jsonify({'code': 0, 'msg': "", 'output': tmp})


@app.route(prefix+'/add')
def addTask():
    try:
        uid = str(uuid.uuid4())
        video = request.args.get("video")
        ass = request.args.get("ass")
        if is_ascii(ass):
            workqueue.put({'uid': uid, 'video': video, 'ass': ass})
            return jsonify({'code': 0, 'msg': "", 'data': {'uid': uid, 'video': video, 'ass': ass}})
        else:
            return jsonify({'code': 1, 'msg': "err:ass isnt ascii"})
    except Exception as e:
        traceback.print_exc()


@app.route(prefix+'/del')
def delTask():
    uid = request.args.get("uid")
    return jsonify(workqueue.delete(uid))


def is_ascii(s):
    return all(ord(c) < 128 for c in s)


if __name__ == '__main__':
    runhttp(queue.Queue(), queue.Queue())
