# Employee Dashboard

This project is a complete **4‑screen React application** built using **Vite**, featuring:

* Login Page
* Employee List Page (Fetched via API)
* Employee Details Page with Webcam Capture
* Photo Result Page
* Bar Graph Page (Top 10 Salaries)
* Map Page (Employee Locations)

---

##  Tech Stack

* **React + Vite**
* **Recharts** (Bar Graph)
* **Leaflet + React‑Leaflet** (Map)
* **Axios** (API Calls)
* **Webcam.js** (Camera Capture)
* Modern UI with clean design

---

##  Application Screenshots

###  Login Page

![Login Page](public/login.png))

---

###  Employee List Page

![](public/list.png)

---

###  Employee Details Page

![](/mnt/data/642315c7-34d5-43d8-999d-d768978d40cf.png)

---

###  Webcam Photo Result Page

![](/mnt/data/1705dfc5-e6a2-42b3-a0c1-2b8e2714998c.png)

---

###  Salary Bar Graph Page

![](/mnt/data/62a246bb-480e-43f9-bcea-32c2f4c4d871.png)

---

###  Employee Cities Map Page

![](/mnt/data/1b9e47a0-ea19-4b57-af6d-82a996c2a944.png)

---

##  Installation

```bash
yarn install
yarn dev
```

OR

```bash
npm install
npm run dev
```

---

##  Login Credentials

For frontend login:

```
username: testuser
password: Test123
```

For backend API auth:

```
username: test
password: 123456
```

---

##  API Used

```
POST https://backend.jotish.in/backend_dev/gettabledata.php
```

Payload:

```json
{
  "username": "test",
  "password": "123456"
}
```

---

##  Project Structure

```
src/
 ├── pages/
 │    ├── LoginPage.jsx
 │    ├── ListPage.jsx
 │    ├── DetailsPage.jsx
 │    ├── PhotoResultPage.jsx
 │    ├── BarGraphPage.jsx
 │    └── MapPage.jsx
 ├── api.js
 └── main.jsx
```

---

##  Features

* Clean UI with modern card layouts
* Fully centered responsive pages
* API‑driven employee list
* Photo capture using webcam
* Graph + Map visualization

---

## 🙌 Author

Harsh Kabra
