from flask import Flask, request, jsonify
import uuid
import queue
import traceback

prefix = '/api'

app = Flask('httpserver')
app.config['JSON_AS_ASCII'] = False


def runhttp(w, d):
    global workqueue, outqueue
    workqueue = w
    outqueue = d
    app.run(host='0.0.0.0', port=8081)


@app.route(prefix+'/test')
def hello_world():
    return 'Hello World!'


@app.route(prefix+'/qsize')
def getQueue():
    return jsonify({'code': 0, 'msg': "", 'data': {'queue_size': workqueue.qsize()}})


@app.route(prefix+'/output')
def getOutput():
    return jsonify({'code': 0, 'msg': "", 'data': {'output': outqueue.getall()}})


@app.route(prefix+'/add')
def addTask():
    try:
        uid = str(uuid.uuid4())
        video = request.args.get("video")
        ass = request.args.get("ass")
        workqueue.put((uid, video, ass))
        return jsonify({'code': 0, 'msg': "", 'data': {'uid': uid, 'video': video, 'ass': ass}})
    except Exception as e:
        traceback.print_exc()
        


@app.route(prefix+'/del')
def delTask():
    uid = request.args.get("uid")
    return jsonify(workqueue.delete(uid))


if __name__ == '__main__':
    runhttp(queue.Queue(), queue.Queue())
