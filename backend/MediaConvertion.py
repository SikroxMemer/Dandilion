from typing import Any
from pytube import YouTube
from pytube import Playlist
import datetime
import ffmpeg , re
import os , time





class MediaConvertion(object):
    
    def __init__(self , url:str , media:str):

        self.url = url
        self.media = media

    def __call__(self) -> dict:
        self.download()

    def __repr__(self) -> str:
        return "MediaConvertion Object"
        
    def download(self):

        Y_obj = YouTube(self.url , use_oauth=False , allow_oauth_cache=True)

        if self.media == "MP4":

            VideoObject = Y_obj.streams.get_highest_resolution()
            file = VideoObject.download("out")
            output = os.path.realpath(file)
            return {'output' : f'{output}'}
            
        elif self.media == "MP3":
            try:
                video = Y_obj.streams.filter(only_audio=True).first()
                output_file = video.download("out")
                name , ext = os.path.splitext(output_file)
                new_file = name + ".mp3"
                os.rename(output_file , new_file)
                output = os.path.relpath(new_file)
                return {'output' : f'..\\..\\..\\backend\\{output}'}
            
            except FileExistsError as error:
                ...

        else:
            return {
                'error' : 'An error was occured' , 
                'time' : datetime.datetime.now()
            }

       

x = MediaConvertion('https://www.youtube.com/watch?v=wDDunNU9VI8' , 'MP3')

print(x.download())