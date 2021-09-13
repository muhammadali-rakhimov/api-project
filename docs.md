API orqali avtorizatsa qilish. (authentication with api)

Request endpoint
POST https://{subdomain}.ox-sys.com/security/auth_check

Data
Params	     Description
_username - username
_password - password
_subdomain - subdomain company

Example request with curl
curl -X POST \
  https://{subdomain}.ox-sys.com/security/auth_check \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d '_username={username}&_password={yourpswd}&_subdomain={yourcompany}'

<!-- ------https://kigiri.github.io/fetch/---------------- -->

fetch("https://{subdomain}.ox-sys.com/security/auth_check", {
  body: "_username={username}&_password={yourpswd}&_subdomain={yourcompany}",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "POST"
})

<!-- -------------------------------------------------------- -->

<!-- -------------------------------------------------------- -->

<div className="App">
  <div class="container">
    <h3>Authorize</h3>
    <hr />
    <form>
      <div className="mb-3">
        <label for="inputUsername1" className="form-label">Username</label>
        <input type="username" className="form-control" id="inputUsername1" />
      </div>
      <div className="mb-3">
        <label for="inputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="inputPassword1" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
</div>

<!-- -------------------------------------------------------- -->


Example result
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1NjE2MjI0NTIsImV4cCI6MTU5MzE1ODQ1Miwicm9sZXMiOltdLCJpZCI6MTE3MTUyfQ.nBcKjBwW-vzKBtnzbnvviB_4uOwNZNeOr63N1UVLP_WKwjP_LBlN7EFbbOS9yX_WL1RLI-T7n3f63R_Z_nqY7844Ras9ZSaRFhafsEnOCmwkIw3SPX_dwU_G2ud5Izc9wjmild9tgE6gwa527afwoPvJSz_stLGus0AW21HEbFWTFX_Uz_6Sea4zSh5AcISAdZ2shcQ5LPNEzmvVmqJPrlvJF2rtOvSWI7Kx12Hnp0deyuOXAvrmFXQ7-ccAlj4KV7brlKcDxQI7xBetnnKGyegHTKjLax6_v8nJENtmbhyUqZ2Z11B4Kdi3x7v8yVzZYPFAUuHJPeLoGe8-SkMX0K7uJtbvZBUjSQVRpJafyiLVYWT2oc5VZA-vkMXo-XVRH_CkxuQAK3FtckHosKBgy-cIQPfaraTFAsh_GYPbtssafqC_-H2ANF0z2NcDWw22sQVLx5Vtia6OcXi6t5kNre2IxeONHEsPMfhqeNVeJpy7PRoSyppm46N6a-HRqJSFcp44uMVCA9sSk8jQu9IhkTTxf8wZNNgYqKILubms3fqzEcfym2bpc1zI3MnZd0LozalYzHRGmtiEMOnGDrIswaoHBmJmxjQ1V98McC8A699IGaPY1u9FaQNvQvAKg3D2JWP56WSOz10GK-g9LW8px5Mht9AlcdBDUWF8s70oevM",
  "lifetime": 1036800
}

Credentials for task
Username: fortest
Password: fortest1
Subdomain: face

Avtorizatsa sahifasini tayyorlash. (login page)














































API orqali mahsulotlarni olish (Getting product from API)
Request endpoint
POST https://{subdomin}.ox-sys.com/variations

Data
Params	     Description
size		size list 
page 		page index of list

Example request with curl
curl --location --request POST 'https://face.ox-sys.com/variations' \
--header 'Authorization: Bearer {{token_here}}' \
--header 'Content-Type: application/json' \
--data-raw '{
   "size": 1,
   "page": 1
   "stock": {
       "exist": true,
       "location": [
           42
       ]
   },
}'


Example result
{
  "page": 1,
  "items": [
    {
      "sku": "20630550020",
      "supplier": "Fruits&Passion",
      "supplierId": 143,
      "category": null,
      "id": 19931,
      "barcode": "776288670944",
	....
      "lastUpdateTime": "2019-10-10 15:11:58",
      "showMarket": true,
      "uploadedImages": [],
      "innerHitIds": null,
      "technicalCard": false,
      "importProperties": []
    }
  ],
  "total_count": 35169















API’dan kelgan ma’lumot orqali mahsulotlar tablitsasini yasash. Tablitsa yasash uchun mahsus packega’lar ishlatish mumkin.
(Products page with table)

Shartlar: 
1. Faqat Avtorizatsiydan o’tganlar ko’rishi mumkin bo’lishi kerak
2. Sahifalay olishi kerak (Pagination)


























































Qidiruv sahifasi. (search page with table) Yana bir tablitsa yasab mahsulotlarni nomi bo’yicha qidirish amalga oshirilganda mahsulotlar so’rovga mos ravishda ko’rinishi va tartiblanishi (sort) kerak. (Faqat client-side, API ga so’rov yuborilmaydi) (Search and sort by product name)
Tartiblanishi (sort) muhim. (so’rov berilgan ma’lumotni o’rniga qarab natija chiqishi kerak) Misolga etibor bering. (Sorting is important)
Ishingizni namunadagi ma’lumot bilan solishtirib ko’rishingiz mumkin.
Namuna ma’lumot (Example data and search result)
Tablitsa shu ko’rinishda bo’lsa
1.	Olma
2.	Nok
3.	Banan
4.	Ananas
5.	Olcha
6.	Anor

So’rov: ‘an’. Qidiruvdan keyingi holati:
1.	Ananas
2.	Anor
3.	Banan

So’rov: ‘o’. Qidiruvdan keyingi holati:
1.	Olma
2.	Olcha
3.	Nok
4.	Anor

