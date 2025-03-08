## Building the Eugene Men's Social Club Website

As a software engineer, I wanted to use my coding skills to contribute to a community that has given me a sense of belonging. The **Eugene Men's Social Club (EMSC) website** was my opportunity to build something meaningful—a website that encourages new participation, and integrates with our primary communication hub, **Discord**.

### **Key Challenges & Goals**

1. **Integrating the Discord API** to enhance community interaction.
2. **Designing a concise and impactful webpage** to attract new members.
3. **Learning Mantine**, a UI framework for styling and responsiveness.
4. **Rearchitecting the backend to a serverless framework**, moving from an Express server to Firebase serverless functions.

### **Tech Stack Overview**

- **Mantine** → For UI components and theming.
- **React Router** → For easy navigation between pages.
- **TypeScript** → For maintainability and scalability.
- **Firebase** → For hosting and potential backend needs.

---

## **Defining the Project Requirements**

To ensure the website was **scalable, maintainable, and extensible**, I focused on:

- Making it **easy for new contributors** to work on.
- Providing potential members with **a clear sense of the group’s mission and benefits**.
- Integrating the **Discord API** for future data driven features.

### **Gathering Community Feedback**

Throughout development, I **shared progress updates** via screenshots and discussions, inviting feedback from members. A **branding expert** joined in and provided valuable insights on user experience and color choices for our brand.

### **Key Constraints**

- **Near-zero operational cost** → Leveraged free-tier hosting and services.
- **Long-term maintainability** → Well-documented codebase for future developers.

---

## **Choosing the Tech Stack**

### **Why Mantine?**

- **Pre-built, accessible components** → Sped up UI development.
- **Theming support** → Allowed for a cohesive brand identity.
- **Built-in responsiveness** → Made mobile optimizations easier.
- **Thourogh documentation and support** → Will be Maintained by future devs.

### **Why React Router?**

- **Familiarity** → Many contributors already know React.
- **Client-side routing** → Ensures a fast, seamless experience.

### **Why TypeScript?**

- **Type safety** → Prevents runtime errors and improves maintainability.
- **Enforces coding consistency** → Helpful for future developers.
- **Better tooling support** → IDEs provide auto-completion and better debugging.

### **Why Firebase?**

- **Simple and scalable deployment** → No need to manage servers.
- **Cloud Functions** → Enables backend logic without a dedicated server.
- **Firestore** → Can support future features like event RSVPs.
- **Cost-efficient** → Scales automatically while staying free at low usage levels.

---

## **Challenges & Lessons Learned**

### **Unexpected Issues**

1. **Migrating from an Express backend to Firebase Functions** required rearchitecting API logic.
2. **Database connections had to be reworked**, as Firebase Functions run on-demand.
3. **Local development required Firebase emulation**, adding complexity.

### **How I Solved Key Problems**

#### **Before Firebase (Express API Implementation)**

![Before Firebase](https://i.imgur.com/Mj0FDs2.png)

#### After Firebase (Serverless Cloud Function)

![After Firebase](https://i.imgur.com/nVHCGKN.png)

### **Lessons for Future Community Developers**

1. **Choose Your Deployment Strategy Early** → Research options before committing. Migrating from Express to Firebase late in development required frustrating refactoring.
2. **Leverage Free-Tier Products** → Firebase helped keep operational costs at zero.
3. **Prioritize Maintainability** → TypeScript, clear documentation, and an intuitive project structure make it easier for future contributors.
4. **Leverage the skill of others** → Seeking feedback from the community gave me valuable insights and direction on design.

---

## **Conclusion**

Developing the **Eugene Men's Social Club website** has been an exciting challenge and a great learning experience. It reinforced the importance of **planning architecture upfront**, **seeking community feedback**, and **leveraging modern web technologies** for scalability.
I plan to dive deeper into individual lessons from this project in upcoming posts, covering topics like **Firebase** migration, **Mantine UI**, and integrating the **Discord API**.

I hope this post encourages others to **use their skills to build solutions for their communities**—whether it's through an event platform, a discussion forum, or a simple landing page.

### **Want to See the Project?**

🌐 **Live Website**: [mens.eugenesocialclub.com](https://mens.eugenesocialclub.com/)  
💻 **GitHub Repo**: [github.com/EugeneMensSocialClub/emsc-website](https://github.com/EugeneMensSocialClub/emsc-website)
