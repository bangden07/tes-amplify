---
date: 2020-06-19
title: '[TUTORIAL] Cara Ubah Tema Terminal Linux dan MacOS'
template: post
thumbnail: '../thumbnails/terminal.png'
slug: cara-ubah-tema-terminal-linux-dan-macos
categories:
  - Tutorial
tags:
  - tutorial
  - terminal
  - tema terminal
  - ubuntu
---

Bosan dengan tampilan terminal yang gitu-gitu aja? Tak perlu cemas dan bingung. Kamu dapat mengubah temanya sesuai dengan keinginananmu. Tema yang dimaksud di sini adalah skema warna bukan modifikasi aset. Jika ingin mengubah aset tampilan secara penuh bisa menggunakan _Oh my zsh_ atau _Oh my fish_.

Sebelum mengubah skema warna ada beberapa persiapan yang harus kamu persiapkan. Antara lain koneksi internet dan terminal itu sendiri bisa menggunakan bash, zsh, fish, atau nu. Namun di sini saya akan menggunakan bash sebagai contoh.

Untuk tools yang akan digunakan, saya menggunakan script dari [**Gogh**](https://mayccoll.github.io/Gogh/).

### Index
- [Apa itu Gogh?](#apa-itu-gogh)
- [Pre-Install](#pre-install)
- [Install](#install)
  1. [Perintah](#1-copy-pastekan-perintah-di-bawah-ini-ke-terminal-kamu)
  2. [Cara memilih tema](#2-pilih-tema-yang-akan-kamu-install-ke-dalam-terminal)

## Apa itu Gogh?

Gogh merupakan script untuk mengganti skema warna secara real atau instan dengan cara mengunduh beberapa source yang sudah disiapkan di repositori Github.

Skema warna ini dapat digunakan oleh beberapa macam distro dan OS antara lain:
- Ubuntu.
- Linux Mint.
- Elementary OS.
- Semua distro linux.

Dan dapat digunakan juga untuk _Desktop Environment_:
- Gnome Terminal.
- KDE Plasma Terminal.
- Pantheon Terminal.
- Tilix.
- XFCE4 Terminal.

MacOS juga diberi bekersempatan untuk mencoba script ini loh.

![](https://raw.githubusercontent.com/Mayccoll/Gogh/master/images/demos/themes.gif)

## Pre-Install

Ubah dahulu ke `bash` jika kamu masih menggunakan `zsh`, `fish`, atau lainnya.

```bash
sudo apt-get install dconf-cli uuid-runtime
```

## Install

##### 1. Copy pastekan perintah di bawah ini ke terminal kamu.

```bash
bash -c  "$(wget -qO- https://git.io/vQgMr)"
```

Atau, jika kamu pengguna MacOS bisa menjalankan perintah sebagai berikut.

```bash
bash -c  "$(curl -sLo- https://git.io/vQgMr)"
```
**Output:**

```terminal
                                                                                
                    █████████                    █████                          
                   ███     ███                    ███                           
                  ███           ██████   ███████  ███████                       
                  ███          ███  ███ ███  ███  ███  ███                      
                  ███    █████ ███  ███ ███  ███  ███  ███                      
                   ███    ███  ███  ███ ███  ███  ███  ███                      
                    █████████   ██████   ███████ ████ █████                     
    ████████████████████████████████████████████████████████████████████████    
    ████████████████████████████████████████████████████████████████████████    
    ████████████████████████████████████████████████████████████████████████    
    ████████████████████████████████████████████████████████████████████████    
    ████████████████████████████████████████████████████████████████████████    
    ████████████████████████████████████████████████████████████████████████    
                                                                                

Themes:

    ( 01 ) 3024 Day
    ( 02 ) 3024 Night
    ( 03 ) Aci
    ( 04 ) Aco
    ( 05 ) Adventuretime
    ( 06 ) Afterglow
    ( 07 ) Alien Blood
    ( 08 ) Argonaut
    ( 09 ) Arthur
    ( 10 ) Atom
    ( 11 ) Azu
    ( 12 ) Belafonte Day
    ( 13 ) Belafonte Night
    ( 14 ) Bim
    ( 15 ) Birds Of Paradise
    ( 16 ) Blazer
    ( 17 ) Borland
    ( 18 ) Broadcast
    ( 19 ) Brogrammer
    ( 20 ) C64
    .....
    ( ALL ) All themes

Usage : Enter Desired Themes Numbers (OPTIONS) Separated By A Blank Space
        Press ENTER without options to Exit

Enter OPTION(S) :
```

##### 2. Pilih tema yang akan kamu install ke dalam terminal.

Misal ingin menggunakan tema **Atom**. Silahkan ketikan angka 10 di `Enter OPTION(s) :` lalu tekan <kbd>ENTER</kbd>

**Demo:**

![](https://raw.githubusercontent.com/Mayccoll/Gogh/master/images/demos/gogh-demo-profile.gif)

Kamu dapat melihat contoh pilihan tema [di sini](https://mayccoll.github.io/Gogh/). Dan jika ingin berkontribusi untuk membuat tema sesuai kreasimu dan ingin membagikannya bisa membaca caranya [di sini](https://github.com/Mayccoll/Gogh/blob/master/content/howto.md).