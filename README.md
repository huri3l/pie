# [Pie](https://pie-sable.vercel.app/) - Personal Images Easier ️
Pie is a personal image gallery application built to explore the latest React ecosystem technologies while prioritizing speed and a beautiful user interface.

## Configuring your environment
Even though you can access and use Pie through [here](https://pie-sable.vercel.app/), you can also run your own version of Pie, free to make whatever change you like.

1. Open your terminal and navigate to your desired directory, then run this command:
    ```bash
    git clone https://github.com/huri3l/pie
    ```
2. Navigate to the cloned project:
    ```bash
    cd pie
    ```
3. Install dependencies:
    ```bash
    npm i
    ```
4. Configure your environment variables based on the `.env.local` file (you may need to understand which services Pie uses in order to get your keys).

5. Start the development environment:
    ```bash
    npm run dev
    ```



## Technologies
* **Core:** **React** with **TypeScript** and **Next.js**, for optimized performance and SEO.
* **Styling:** I chose **Tailwind CSS** for rapid UI development.
* **Analytics:** **Posthog** provides valuable user behavior insights for data-driven improvements.
* **Rate Limiting & Authentication:** **Upstash** safeguards against abuse with robust rate limiting. I also integrated **Clerk** for login options with GitHub and Google accounts.
* **Database & Deployment:** **Drizzle** manages data efficiently for the application. I deployed Pie on **Vercel**'s robust and scalable hosting platform, using also **Vercel Postgres**.

## Features
Upload and manage your personal image collection with ease.
View images with smooth navigation thanks to **Next.js parallel routing**.
Click on an image to open a modal or share the link to access in any browser logged into your account to the full-size image page within the same browsing context.

**Pie** - Carved by Huriel Lopes - https://huriel.com.br/en-us