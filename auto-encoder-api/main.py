import httpserver
import task
import FifoQueue
import threading
import queue

taskqueue = FifoQueue.Queue()
workqueue = FifoQueue.Queue()
outqueue = FifoQueue.Queue(maxsize=10)

httpthread=threading.Thread(target=httpserver.runhttp, args=(taskqueue,workqueue,outqueue,))
httpthread.start()

taskthread=threading.Thread(target=task.runtask, args=(taskqueue,workqueue,outqueue,))
taskthread.start()