import subprocess
import time
import queue

testarg = r'ffmpeg.exe -i "test.mp4" -vf "ass=test.ass" -c:v libx264 -x264-params "threads=32" -profile:v high -preset medium -crf 20 -c:a copy -ss 00:00:00 -vframes 1800 ".\test-output.mp4"'
TemplateArg = r'ffmpeg.exe -y -i "{}" -vf "ass={}" -c:v libx264 -x264-params "threads=32" -profile:v high -preset medium -crf 20 -c:a copy -ss 00:00:00 -vframes 1800 "{}"'
workingdir = r'C:\Users\Administrator\Desktop\web\dl'


def runtask(workqueue, outqueue):
    while True:
        if not workqueue.empty():
            uid, video, ass = workqueue.get()
            print((uid, video, ass))
            arg = TemplateArg.format(
                video, ass, video.replace('.mp4', f'-{uid}.mp4'))
            ret = subprocess.run(arg, encoding='utf-8', cwd=workingdir)
            if ret.returncode == 0:
                outqueue.put({'code': 0, 'msg': "", 'data': {'uid': uid, 'video': video, 'ass': ass, 'msg': str(ret)}})
            else:
                outqueue.put({'code': 1, 'msg': "err:process run fail", 'data': {'uid': uid, 'video': video, 'ass': ass, 'err': str(ret)}})
            print(f'queue [{uid}] finish')
            print(f'remain {workqueue.qsize()}')
        time.sleep(0.01)


if __name__ == '__main__':
    ret =subprocess.run(testarg, encoding='utf-8', cwd=workingdir)
    if ret.returncode == 0:
        print("success:", ret)
    else:
        print("error:", ret)
