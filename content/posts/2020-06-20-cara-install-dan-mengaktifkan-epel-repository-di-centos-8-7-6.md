---
date: 2020-06-20
title: '[TUTORIAL] Cara Install dan Mengaktifkan EPEL Repository di CentOS 8/7/6'
template: post
thumbnail: '../thumbnails/centos.png'
slug: cara-install-dan-mengaktifkan-epel-repository-di-centos-8-7-6
categories:
  - Tutorial
tags:
  - tutorial
  - epel
  - linux
  - centos
  - server
---

Pada artikel ini, Anda akan belajar cara menginstal dan mengaktifkan repositori EPEL pada rilis CentOS 8.x, CentOS 7.x dan CentOS 6.x. Untuk menginstal paket perangkat lunak open-source standar tambahan dengan menggunakan `YUM` dan manajer paket `DNF`.

## Apa itu EPEL?

__EPEL__ singkatan dari _(Extra Packages for Enterprise Linux)_ adalah proyek repositori berbasis sumber terbuka dan komunitas gratis dari tim __Fedora__ yang menyediakan 100% paket perangkat lunak tambahan berkualitas tinggi untuk distribusi Linux termasuk __RHEL__ _(Red Hat Enterprise Linux)_, __CentOS__, dan __Scientific Linux__.

Proyek __EPEL__ bukan bagian dari __RHEL__/__CentOS__ tetapi dirancang untuk distribusi Linux utama dengan menyediakan banyak paket sumber terbuka seperti alat jaringan, alat _sysadmin_, pemrograman, pemantauan dan sebagainya. Sebagian besar paket __EPEL__ dikelola oleh _repo_ __Fedora__.

## Mengapa kami Menggunakan Repositori EPEL?

- [x] Menyediakan banyak paket _open source_ untuk diinstal melalui `Yum` dan `DNF`.
- [x] __Epel__ _repo_ adalah sumber terbuka 100% dan bebas digunakan.
- [x] Tidak menyediakan paket duplikat inti dan tidak ada masalah kompatibilitas.
- [x] Semua paket __EPEL__ dikelola oleh __Fedora__ _repo_.

## Cara Install Repositori EPEL di Server CentOS

Untuk menginstal repositori __EPEL__ pada rilis __CentOS__ apa pun, masuk ke _instance_ server __CentOS__ Anda sebagai pengguna `root` dan jalankan perintah seperti yang dijelaskan di bawah ini sesuai versi rilis Anda.

#### Cara Install Repo EPEL pada CentOS 8.x

```bash
yum search epel-release
yum info epel-release
yum install epel-release
```
#### Cara Install Repo EPEL pada CentOS 7.x

```bash
yum search epel-release
yum info epel-release
yum install epel-release
```
#### Cara Install Repo EPEL pada CentOS 6.x

```bash
yum search epel-release
yum info epel-release
yum install epel-release
```
## Bagaimana Saya Memverifikasi Repo EPEL?

Sekarang perbarui paket perangkat lunak dan verifikasi instalasi repositori __EPEL__ menggunakan perintah berikut.

```bash
yum update
rpm -qa | grep epel
```

Anda juga dapat memverifikasi bahwa repositori __EPEL__ diaktifkan pada sistem, dengan daftar semua repositori aktif, menggunakan perintah berikut.

```bash
yum repolist
```

Untuk daftar paket perangkat lunak yang merupakan repositori __EPEL__, jalankan perintah.

```bash
dnf --disablerepo="*" --enablerepo="epel" list available
atau
yum --disablerepo="*" --enablerepo="epel" list available
```
Atau, Anda dapat menggunakan perintah `grep` berikut untuk mencari nama paket individual seperti yang ditunjukkan.

```bash
yum --disablerepo="*" --enablerepo="epel" list available | grep 'htop'
atau
dnf --disablerepo="*" --enablerepo="epel" list available | grep 'monitorix'
```

## Bagaimana Saya Menggunakan EPEL Repo untuk Menginstal Paket?

Setelah repositori __EPEL__ berhasil diinstal, sebuah paket dapat diinstal menggunakan perintah.

```bash
dnf --enablerepo="epel" install <package_name>
atau
yum --enablerepo="epel" install <package_name>
```

Misalnya, untuk mencari dan menginstal paket yang disebut htop - penampil proses Linux interaktif, jalankan perintah berikut.

```bash
yum --enablerepo=epel info htop
```

Sekarang, untuk menginstal paket Htop, perintahnya adalah.

```bash
yum --enablerepo=epel install htop
```

> Catatan: File konfigurasi EPEL terletak di `/etc/yum.repos.d/epel.repo`.

## Kesimpulan

Pada artikel ini, Anda belajar cara menginstal repositori __EPEL__ pada rilis _CentOS 8.x_, _CentOS 7.x_, dan _CentOS 6.x_. Kami mempersilahkan Anda untuk mencobanya dan membagikan artikel ini.