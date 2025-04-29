# To-Do List Uygulaması

Bu proje, kullanıcıların günlük yapılacaklar listelerini yönetebileceği bir **To-Do List** web uygulamasıdır. Kullanıcılar, kayıt olma ve giriş yapma işlemlerini tamamladıktan sonra görevlerini ekleyebilir, düzenleyebilir ve silebilir. Firebase Authentication ile güvenli bir şekilde kullanıcı yönetimi yapılmaktadır. Kullanıcı arayüzü ise **Tailwind CSS** ile tasarlanmıştır.

## Özellikler

- **Kullanıcı Kayıt Olma**: Kullanıcılar e-posta ve şifre ile hesap oluşturabilir.
- **Kullanıcı Girişi**: Kayıtlı kullanıcılar e-posta ve şifre ile giriş yapabilir.
- **Firebase Entegrasyonu**: Kullanıcılar Firebase Authentication ile kaydedilir ve giriş yapar.
- **Görev Yönetimi**: Kullanıcılar yapılacaklar listesine görev ekleyebilir, düzenleyebilir veya silebilir.
- **Kullanıcı Arayüzü**: Modern ve kullanıcı dostu bir arayüz ile görevler kolayca yönetilebilir.
- **Tailwind CSS**: Projede kullanıcı arayüzü için Tailwind CSS kullanılmıştır.

## Kullanıcı Kayıt Olma ve Giriş

### Kayıt Olma

1. Kullanıcı, kayıt formuna e-posta ve şifre bilgilerini girer.
2. Kullanıcı bilgileri Firebase Authentication'a kaydedilir.
3. Kayıt işlemi başarılı olduğunda, kullanıcı **giriş ekranına** yönlendirilir.

### Giriş Yapma

1. Kullanıcı, giriş ekranında e-posta ve şifresini girer.
2. Firebase Authentication, kullanıcıyı doğrular ve başarılı giriş sonrası kullanıcı **yapılacaklar listesi** sayfasına yönlendirilir.

### Ekran Özellikleri:

1. **Kategoriler**:
    - Kategoriler ekranın üst kısmında **Ev**, **Okul**, **İş** gibi başlıklar olarak görüntülenir.
    - Her kategori altında o kategoriye ait görevler sıralanır.

2. **Yeni Görev Ekleme (New Task)**:
    - Kullanıcılar, sağ üst köşedeki **Yeni Görev Ekle** butonuna tıklayarak yeni görevler ekleyebilirler.
    - Görev adı ve açıklaması girildikten sonra kategori seçilerek görev eklenir.

3. **Görevlerin Düzenlenmesi**:
    - Kullanıcılar mevcut görevlerin yanında **Düzenle** butonunu kullanarak görevi güncelleyebilirler.
    - **Sil** butonu ile kullanıcı, görevleri silebilir.
  
  ### PROJEYE AİT GÖRÜNTÜLER
  ![image](https://github.com/user-attachments/assets/bfbc032d-b8b3-4f29-bd7c-69d1337c6bea)
  ![image](https://github.com/user-attachments/assets/8334ea9f-f6c4-45ec-83db-5d5ad0569729)
  ![image](https://github.com/user-attachments/assets/9beda55b-d342-4e59-9e38-f70009928983)
  ![image](https://github.com/user-attachments/assets/d6902e36-4684-4795-a2c8-eaffa4f4e97d)
  ![image](https://github.com/user-attachments/assets/effd0577-73b4-4185-b6b9-3e424ac88159)








