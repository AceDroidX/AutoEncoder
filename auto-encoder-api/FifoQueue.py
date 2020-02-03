import threading


class Queue:
    def __init__(self,maxsize=0):
        self.threadLock = threading.Lock()
        self.maxsize=maxsize
        self.queuelist = []

    def put(self, obj):
        self.threadLock.acquire()
        if self.maxsize!=0 and len(self.queuelist)>=self.maxsize:
            self.queuelist.pop(0)    
        self.queuelist.append(obj)
        self.threadLock.release()

    def getall(self):
        return self.queuelist

    def get(self):
        self.threadLock.acquire()
        tmp = self.queuelist[0]
        self.queuelist.pop(0)
        self.threadLock.release()
        return tmp

    def delete(self, obj):
        self.threadLock.acquire()
        try:
            if type(obj) == int:
                uid = self.queuelist[obj][0]
                self.queuelist.pop(obj)
            elif type(obj) == tuple:
                uid = obj[0]
                index = self.queuelist.index(obj)
                self.queuelist.pop(index)
            elif type(obj) == str:
                for i in range(len(self.queuelist)):
                    if self.queuelist[i][0] == obj:
                        self.queuelist.pop(i)
                        self.threadLock.release()
                        uid = obj
                        return {'code': 0, 'msg': "", 'data': {'uid': uid}}
                self.threadLock.release()
                return {'code': 3, 'msg': "err:delete str not found"}
            else:
                self.threadLock.release()
                return {'code': 2, 'msg': "err:delete type"}
        except Exception as e:
            self.threadLock.release()
            print(e)
            return {'code': 1, 'msg': "err:unknow error", 'data': {'uid': uid,'err': e}}

    def empty(self):
        self.threadLock.acquire()
        tmp = len(self.queuelist)
        self.threadLock.release()
        return tmp == 0

    def qsize(self):
        self.threadLock.acquire()
        tmp = len(self.queuelist)
        self.threadLock.release()
        return tmp
