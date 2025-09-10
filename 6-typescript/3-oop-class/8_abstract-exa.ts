// Soyut Sınıf
abstract class MusicPlayer {
  constructor(public apiUrl: string) {}

  getMusic(): void {
    console.log(this.apiUrl + " müzik çekiliyor...");
  }

  abstract playMusic(name: string): void;
}

// Soyut sınıfı miras alan sınıf
class Spotify extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " müziği spotify'da çalıyor...");
  }
}

// Soyut sınıfı miras alan sınıf
class AppleMusic extends MusicPlayer {
  playMusic(name: string): void {
    console.log(name + " müziği apple music'den çalıyor...");
  }
}

const spotify = new Spotify("https://spotify.api.com");
const appleMusic = new AppleMusic("https://api.music.com");

spotify.getMusic();
appleMusic.getMusic();

spotify.playMusic("yüz yüze");
appleMusic.playMusic("yüz yüze");
