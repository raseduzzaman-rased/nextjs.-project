# Goriber Gadget

A simple e-commerce web application built with Next.js 15 using the App Router. Users can browse products publicly, view product details, and after logging in via Google OAuth, access a protected dashboard to add new products.

## Features

- **Landing Page (`/`)**: Publicly accessible with Navbar, Hero section, Product Highlights, and Footer.
- **Login (`/login`)**: Users can login using Google OAuth via NextAuth.js.
- **Product List (`/products`)**: Public page showing all products from a mock JSON file.
- **Product Details (`/products/[id]`)**: Public page showing detailed information of a single product.
- **Dashboard (`/dashboard`)**: Protected page accessible only after login.
  - **Add Product (`/dashboard/add-product`)**: Add a new product using a form, only visible to authenticated users.
- Responsive Navbar with Login/Logout button depending on user session.
- Private routes redirect unauthenticated users to login.
- Mobile-friendly responsive design with dropdown menu.
- Loading spinner on form submission and toast notifications on product add (optional).


 **Setup environment variables**
Create a `.env.local` file in the root directory:



## Technologies Used

* Next.js 15 (App Router)
* NextAuth.js for authentication
* React for UI components
* Tailwind CSS for styling
* Mock JSON or simple API routes for product data
* Vercel (for deployment)

---

