---
date: 2020-05-27
title: '[TUTORIAL] Bagaimana Cara Install Strapi di Ubuntu 16.04'
template: 
thumbnail: '../thumbnails/strapi.png'
slug: bagaimana-cara-install-strapi-di-ubuntu-16.04
categories:
  - Tutorial
tags:
  - tutorial
  - strapi
  - ubuntu
---

# Introduction

### Apa itu Strapi?

Strapi merupakan CMS *(Content Management Framework)* bersifat *open source* yang dibuat untuk membantu para developer membangun sebuah API dengan sangat mudah. Strapi dibuat dan dijalnkan di atas Node.js yang memang sudah terbukti akan kehandalannya. Berikut adalah fitur yang dimiliki strapi.

- Halaman admin default yang dapat di modifikasi sesuai dengan kebutuhan si developer. Artinya Anda dapat mengubah logika dan gaya pada admin panel tersebut.

- Sistem plugin tambahan dapat membantu seorang developer menambakan berbagai macam fitur server API sesuai dengan kebutuhan dan keinginan.

- *Front-end agnostic* ialah bagian dari front-end Strapi yang dapat dipasangkan atau digabungkan dengan framework lainnya, misal:
    - React
    - Vue
    - Angular
    - dsb

- Strapi memiliki standar sistem keamanan antaralain:
    - CSRF
    - CORS
    - P3P
    - Xframe
    - XSS
    - dsb

    Fitur standar keamanan tersebut sudah ada di dalam Strapi.

- Support Strapi ialah berbasis komunitas sehingga dapat memungkinakan Strapi tetap terus dikembangkan sebagai platform *open source* dan gratis.

### Persyaratan
- Fresh server menggunakan OS Ubuntu 16.04.
- User akun yang `non-root` dengan hak `sudo`
- NodeJS versi 10.x atau terbaru. NodeJS merupakan platform server yang menjalankan JavaScript.
- NPM versi 6.x atau terbaru. NPM merupakan *package manager* untuk JavaScript.
-  MongoDB versi 3.x atau terbaru. MongoDB merupakan database yang NonSQL yang memiliki basis dokumen berformat JSON.

# Instalasi

### Perbarui Paket Repositori Ubuntu

```bash
sudo apt update && sudo apt upgrade -y
```

### Install NodeJS and NPM

Jalankan perintah berikut untuk menginstal NodeJS:

```bash
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt install nodejs
```
Cek versi dari Node dan NPM dengan perintah:

```bash
node -v && npm -v
```

Contoh Output:

```terminal
# v10.x.x
# 6.x.x
```
Supaya beberapa NPM package dapat berfungsi, Anda perlu menginstall beberapa paket `build-essential`:

```bash
sudo apt install build-essential -y
```
### Install MongoDB

Impor GPG key dari MongoDB ke dalam sistem:

<div class="filename">GPG Key MongoDB</div>

```bash
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
```

Setelah key sudah di impor, buat list dengan menjalankan:

```bash
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
```

Reload paket list:

```bash
sudo apt update
```

Install paket MongoDB:

```bash
sudo apt install -y mongodb-org
```

Jalankan daemon MongoDB:

```bash
sudo service mongo start
```

Menyambungkan MongoDB shell:

```shell
mongo
```

Buat database dengan MongoDB sesuai dengan nama project Anda:

```shell
use nama-project-Anda
```

### Install Strapi

Ikuti perintah di bawah ini untuk menginstall Strapi global:

```bash
npm install strapi@alpha -g
```

Setelah berhasil diinstall, silahkan cek installan Anda tersebut apakah berhasil dengan cara:

```bash
strapi -v
```

Contoh Output

```terminal
# 3.0.0-alpha.x.
```

### Buat Project Sederhana menggunakan Strapi

Buat project pertama Anda:

```bash
strapi new nama-project-anda
```
Jawab promp berikut sesuai dengan contoh yang saya berikan. Kita akan memilih MongoDB sebagai basis data utama kita, masukan nama basis data yang telah dibuat sebelumnya dan tekan <kbd>ENTER</kbd> untuk memilihopsi default. Ini akan tampil sebagai berikut:

```terminal
Lets configurate the connection to your database:
? Choose your main database: MongoDB
? Database name: nama-project-anda
? Host: 127.0.0.1
? +srv connection: false
? Port (It will be ignored if you enable +srv): 27017
? Username:
? Password:
? Authentication database (Maybe "admin" or blank):
? Enable SSL connection: false
```

Hal ini akan membuat folder baru bernama `nama-project-anda` include dengan seluruh struktur file aplikasi Strapi.

Jalankan server Anda:

```bash
strapi start
```

Sekarang server Strapi siap utntuk digunakan, Anda dapat mendaftarkan user pertama Anda dengan membuka `http://ipserver:1337/admin`.

Sekian tutorial kali ini dengan tema "Bagaimana Cara Install Strapi di Ubuntu". Semoga artikel ini dapat bermanfaat bagi Anda semua yang menyempatkan membaca artikel saya dan jangan lupa bagikan ke teman Anda supaya mereka juga bisa menginstall strapi di ubuntu.

Jangan lupa dukung saya terus untuk selalu memberikan artikel yang bermanfaat lainnya. Apabila ada pertanyaan, usulan, atau kesalahan dalam perintah di atas. Anda dapat menghubungi saya melalui email di hai@bangden.codes