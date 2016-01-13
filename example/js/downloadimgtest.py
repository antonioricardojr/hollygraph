import os
import urllib

movie = "teste01"

director_name = "XXxXXX"

newpath = r'' + director_name

if not os.path.exists(newpath):
    os.makedirs(newpath)

urllib.urlretrieve("https://ia.media-imdb.com/images/M/MV5BNDM3OTIyNDIwMV5BMl5BanBnXkFtZTcwODg2NjEyMQ@@._V1._SX91_SY140_.jpg",newpath + '/' +movie + ".jpg")