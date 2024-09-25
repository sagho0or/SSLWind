# SafeLLM Interaction System

## Overview

The **SafeLLM Interaction System** is a secure, scalable, and real-time interface designed for interacting with large language models (LLMs) in high-risk environments. This project ensures that engineers and managers can safely use AI models by integrating features like role-based access control, safety monitoring, and secure communication protocols.

Built using **Next.js**, **Redux**, **TypeScript**, and **JWT tokens**, this interface is ideal for industries such as wind turbine maintenance and healthcare, where safe, real-time decision-making is crucial.

---

### Features

- **Secure Login with JWT**: Implements OTP-based authentication and secure session management using HTTP-only cookies.
- **Role-Based Access Control**: Customizable access for engineers, managers, and admins.
- **Real-Time Chat Interface**: Communicate securely with the SafeLLM model in real-time.
- **Live Data Visualization**: Monitor safety scores with real-time updates using WebSocket and infinite scroll for historical data.
- **Scalability**: Built with modular components for easy expansion and integration.
- **Security**: Implemented using JWT, XSS protection, and 2FA.

---

### Technologies

- **Next.js**: Server-side rendering and static site generation.
- **Redux & Redux-Saga**: Efficient state management.
- **JWT Tokens**: Secure authentication.
- **TypeScript**: Type safety for better maintainability.
- **Axios**: API calls for secure real-time communication.

---

### Use Cases

- **Wind Turbine Maintenance**: Secure monitoring and interaction with AI models for critical safety tasks.
- **Healthcare**: Safe and reliable use of AI in decision-making processes.

---

### Installation

```bash
git clone https://github.com/yourusername/safe-llm-interaction-system.git
cd safe-llm-interaction-system
npm install
npm run dev
