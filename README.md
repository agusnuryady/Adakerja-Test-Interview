# Adakerja Technical Test

Code base React Native terbaru menggunakan versi RN v0.63.0 dan javascript base,
sudah terpasang modul:
1. react-native-i18n untuk switch bahasa
2. react-navigation sebagai navigation route management
3. redux dan redux persist sebagai global state dan permanent local memory
4. react-native-svg untuk asset icon yang berformat svg menjadi js.

## How to use

Untuk developer yang ingin menggunakan codebase ini silahkan ikuti intruksi dibawah ini:

1. setelah mengclone atau mendownload codebase ini, buka filenya di programing tools seperti VS Code atau yang sejenisnya
2. jika clone dari repo dengan url segera hapus `.git` folder, atau jalankan > `rm -rf .git`
3. buka terminal lalu jalankan > `yarn`
4. lalu jalan kan > `cd ios && pod install && cd ..`
5. lalu jalan kan > `npx react-native-fix-image`
6. lalu jalankan > `react-native link`
7. lalu jalankan > `chmod +x prepare-env.sh` khusus mac atau bisa dijalankan di gitbash terminal pada windows
8. setelah itu buat file 'local.properties' dengan isi directori sdk android di komputer anda, taruh di dalam file android/ agar dapat menjalankan emulator android
9. selanjutnya jalankan > `yarn env:dev` , atau enviroment lainnya sesuai script yg terdapat di package.json
10. terakhir jalankan > `yarn ios` atau > `yarn android` untuk running RN di device atau emulator

## How to login

use this account bellow to login:

username: `adakerja@gmail.com`
password: `123456`

## Screenshoot

<div align="center">
    <img width="200" src="https://github.com/agusnuryady/Adakerja-Test-Interview/blob/master/src/assets/images/sc_1.png">
    <img width="200" src="https://github.com/agusnuryady/Adakerja-Test-Interview/blob/master/src/assets/images/sc_2.png">
    <img width="200" src="https://github.com/agusnuryady/Adakerja-Test-Interview/blob/master/src/assets/images/sc_3.png">
    <img width="200" src="https://github.com/agusnuryady/Adakerja-Test-Interview/blob/master/src/assets/images/sc_4.png">
</div>

## Created by @agusnuryady
25-04-2021
