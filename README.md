# 🛍️ PickUp Shopping

A high-performance, responsive shopping-cart application built with **React**, **Tailwind CSS**, and **TypeScript**.

---

## 🚀 Live Demo
**Check it out here:** [https://pickup-shopping.vercel.app/](https://pickup-shopping.vercel.app/)

---

## ✨ Features

* **Product Feed:** Fetches and displays products from API.
* **Shopping Cart System:** * Add/Remove items with a single click.
    * Responsive full-screen cart overlay for mobile devices.
    * **Body Scroll Lock:** Implemented custom hooks to prevent background scrolling when the cart is open on mobile.
* **Responsive UI:** Optimized for everything from small mobile screens to large desktop monitors.
* **Glassmorphism Design:** Modern aesthetic with subtle gradients, shadows, and blurred backgrounds.

---

## 🛠️ Tech Stack

* **Frontend:** React 18+
* **Styling:** Tailwind CSS (Utility-first styling)
* **Language:** TypeScript (For type safety and better developer experience)
* **Data Source:** [DummyJSON API](https://dummyjson.com/)
* **Deployment:** Vercel


---

## 📦 Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-wakar-mirdaha/pickup-shopping.git](https://github.com/wakar-mirdaha/pickup-shopping.git)
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Run the development server:**
    ```bash
    npm run dev
    ```
4.  **Open in browser:** `http://localhost:5173`

---

## 🔧 Custom Hooks & Logic

### `useScrollLock`
To enhance the mobile UX, I developed a custom TypeScript hook that disables background scrolling when the Cart or any Modal is active.

```typescript
// Prevents "Scroll Leak" on mobile devices
export const useScrollLock = (isLocked: Boolean) =>{
    useEffect( ()=>{
        const isMobile = () => window.innerWidth < 768

        if(isLocked && isMobile()){
            document.body.classList.add('overflow-hidden','h-screen','touch-none')
        }else{
            document.body.classList.remove('overflow-hidden','h-screen','touch-none')
        }

        return () =>{
            document.body.classList.remove('overflow-hidden','h-screen','touch-none')
        }

    },[isLocked])
}
