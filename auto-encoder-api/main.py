import httpserver
import task
import FifoQueue
import threading
import queue

workqueue = FifoQueue.Queue()
outqueue = FifoQueue.Queue(maxsize=10)

httpthread=threading.Thread(target=httpserver.runhttp, args=(workqueue,outqueue,))
httpthread.start()

taskthread=threading.Thread(target=task.runtask, args=(workqueue,outqueue,))
taskthread.start()