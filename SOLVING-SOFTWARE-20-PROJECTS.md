# Master Glossary of Software Concepts + 20 Distinct Projects

> Learn the bits and pieces. Then learn how they combine into systems.
>
> This collection is designed as a free learning resource for builders and communities. The 20 projects deliberately explore different languages, frameworks, libraries, dependencies, interfaces, APIs, webhooks, and scheduled routines so that studying them builds broad software-architecture intuition.

## Part 1 — The Master Glossary

The meaning of the core words you need to know to build software.

### 1. Framework

The scaffolding. It dictates the overall architecture and flow of an application. You write code *for* the framework.

**Examples:** React, Django.

### 2. Library

A toolbox. It provides specific functions that you call when you need them. You control the flow.

**Examples:** Lodash, NumPy.

### 3. Dependency

External code that a project requires to function, managed by a package manager.

**Example:** a database driver.

### 4. Frontend

The client side: what the user sees, touches, and interacts with.

### 5. Backend APIs

The server-side brain. It processes logic, talks to databases, and serves data to the frontend through structured endpoints such as REST or GraphQL.

### 6. Webhooks

Automated **push messages**. When an event happens in System A, it instantly sends an HTTP payload to System B. This is an event-driven integration pattern.

### 7. Cron Jobs

Scheduled, time-based tasks. Scripts or jobs that run automatically at specific intervals, such as every night at midnight.

---

## Part 2 — 20 Distinct Software Projects

**Design rule:** no primary tool, framework, or language is repeated as the main choice across these 20 projects.

### 1. High-Frequency Rust E-Commerce

- **Frameworks:** Leptos (Rust full-stack)
- **Libraries:** Serde (data serialization)
- **Dependencies:** Tokio (async runtime)
- **Frontend:** WebAssembly (Wasm) compiled UI
- **Backend APIs:** Actix-web (REST endpoints)
- **Webhooks:** Stripe (payment success events)
- **Cron Jobs:** Tokio-cron (inventory restocking)

**Tool glossary**

Leptos builds reactive UIs in Rust; Serde converts Rust structs to JSON; Tokio handles concurrent network requests without blocking.

**3 in-depth use cases**

1. Sub-millisecond checkout processing for flash sales.
2. Memory-safe financial transaction logging.
3. Real-time inventory deduction without race conditions.

### 2. Go IoT Agricultural Dashboard

- **Frameworks:** SvelteKit (Frontend), Fiber (Backend)
- **Libraries:** MQTT.js (messaging protocol)
- **Dependencies:** Gorm (ORM for databases)
- **Frontend:** Svelte (reactive UI)
- **Backend APIs:** gRPC (high-performance remote procedure calls)
- **Webhooks:** AWS IoT Core (sensor threshold alerts)
- **Cron Jobs:** Robfig (daily soil data aggregation)

**Tool glossary**

SvelteKit compiles UI to vanilla JS; Fiber is an Express-inspired Go web framework; gRPC uses Protocol Buffers for high-performance backend communication.

**3 in-depth use cases**

1. Monitoring thousands of soil moisture sensors in real time.
2. Automating irrigation valves through low-latency gRPC.
3. Predicting crop yields using daily aggregated cron data.

### 3. Python AI Image Generation Studio

- **Frameworks:** Next.js (Frontend), FastAPI (Backend)
- **Libraries:** PyTorch (machine learning), Pillow (image processing)
- **Dependencies:** Hugging Face Hub (model weights)
- **Frontend:** React (via Next.js)
- **Backend APIs:** REST (JSON payloads for image prompts)
- **Webhooks:** Replicate (notifying when AI image generation finishes)
- **Cron Jobs:** APScheduler (cleaning up temporary image caches)

**Tool glossary**

FastAPI auto-generates API documentation and validates data; PyTorch handles neural-network computations; Pillow resizes and formats images.

**3 in-depth use cases**

1. Generating marketing assets from text prompts.
2. Batch-processing thousands of user-uploaded photos for style transfer.
3. Auto-moderating generated images for NSFW content.

### 4. Solidity Web3 Blockchain Explorer

- **Frameworks:** Vue 3 (Frontend), Hardhat (Backend/Dev)
- **Libraries:** Ethers.js (blockchain interaction)
- **Dependencies:** The Graph (indexing protocol)
- **Frontend:** Vue.js (reactive components)
- **Backend APIs:** GraphQL (querying indexed blockchain data)
- **Webhooks:** Alchemy (notifications for specific wallet transactions)
- **Cron Jobs:** Node-cron (syncing block headers every 12 seconds)

**Tool glossary**

Hardhat compiles and tests smart contracts; Ethers.js connects applications to the Ethereum network; The Graph indexes blockchain data for fast querying.

**3 in-depth use cases**

1. Tracking decentralized finance (DeFi) liquidity pools.
2. Verifying smart-contract source code for audits.
3. Alerting users when a specific NFT is transferred.

### 5. Elixir Real-Time Hospital Triage Chat

- **Frameworks:** Phoenix LiveView (Frontend/Backend unified)
- **Libraries:** Phoenix Channels (WebSockets)
- **Dependencies:** Ecto (database wrapper)
- **Frontend:** HTML/JS rendered via LiveView
- **Backend APIs:** Phoenix Channels (persistent WebSocket connections)
- **Webhooks:** Twilio (incoming SMS to chat routing)
- **Cron Jobs:** Quantum (hourly patient wait-time reports)

**Tool glossary**

Phoenix LiveView pushes UI updates over WebSockets without requiring a traditional client-side application; Ecto maps Elixir data to SQL safely.

**3 in-depth use cases**

1. Routing emergency SMS texts to on-call doctors.
2. Displaying real-time ER bed availability to ambulances.
3. Auto-archiving chat logs for compliance workflows.

### 6. C++ 4K Video Transcoding Pipeline

- **Frameworks:** Angular (Frontend), Drogon (Backend)
- **Libraries:** FFmpeg (video manipulation)
- **Dependencies:** Boost (C++ utility libraries)
- **Frontend:** Angular (enterprise-grade UI)
- **Backend APIs:** REST (uploading and tracking video jobs)
- **Webhooks:** Mux (video-processing completion events)
- **Cron Jobs:** Croncpp (purging old video chunks)

**Tool glossary**

Drogon is a high-performance C++ web framework; FFmpeg decodes and encodes video formats; Boost provides advanced C++ utilities for memory, threading, and more.

**3 in-depth use cases**

1. Converting raw camera footage into web-optimized HLS streams.
2. Extracting audio tracks for podcast generation.
3. Embedding watermarks into video files at the processing level.

### 7. Java Global Supply Chain Tracker

- **Frameworks:** Thymeleaf (Frontend), Spring Boot (Backend)
- **Libraries:** Apache Kafka Client (streaming)
- **Dependencies:** Hibernate (Java ORM)
- **Frontend:** Thymeleaf (server-side rendered HTML)
- **Backend APIs:** SOAP/XML (legacy enterprise integration)
- **Webhooks:** SAP (shipment-status updates)
- **Cron Jobs:** Quartz Scheduler (nightly inventory reconciliation)

**Tool glossary**

Spring Boot auto-configures enterprise Java applications; Kafka handles large streams of logistics data; Hibernate maps Java objects to relational tables.

**3 in-depth use cases**

1. Tracking shipping containers through GPS pings.
2. Automatically reordering raw materials when stock drops below a threshold.
3. Generating customs-clearance documents through SOAP APIs.

### 8. C Smart Home Hub Controller

- **Frameworks:** React Native (Mobile Frontend), ESP-IDF (IoT Backend)
- **Libraries:** cJSON (C JSON parser)
- **Dependencies:** FreeRTOS (real-time operating system)
- **Frontend:** React Native (iOS/Android app)
- **Backend APIs:** CoAP (Constrained Application Protocol for low-power devices)
- **Webhooks:** Home Assistant (device-state changes)
- **Cron Jobs:** ESP-Timer (scheduled thermostat adjustments)

**Tool glossary**

ESP-IDF is the official C framework for Espressif chips; FreeRTOS provides real-time task scheduling; CoAP is a lightweight protocol designed for constrained IoT devices.

**3 in-depth use cases**

1. Turning off all lights when the security system is armed.
2. Adjusting HVAC based on time of day and room occupancy.
3. Sending push notifications when a smart lock is forced open.

### 9. C# Algorithmic Trading Bot

- **Frameworks:** Blazor (Frontend), ASP.NET Core (Backend)
- **Libraries:** MathNet.Numerics (financial math)
- **Dependencies:** Dapper (micro-ORM)
- **Frontend:** Blazor WebAssembly (C# in the browser)
- **Backend APIs:** SignalR (real-time price-tick streaming)
- **Webhooks:** Plaid (bank-account balance changes)
- **Cron Jobs:** Hangfire (end-of-day portfolio reporting)

**Tool glossary**

Blazor runs C# in the browser through WebAssembly; SignalR adds real-time web functionality to ASP.NET; Dapper executes SQL with low overhead.

**3 in-depth use cases**

1. Executing arbitrage trades across different crypto exchanges.
2. Streaming live order-book depth to the frontend UI.
3. Automatically rebalancing a stock portfolio at market close.

### 10. Ruby Electronic Health Records (EHR)

- **Frameworks:** ERB (Frontend), Ruby on Rails (Backend)
- **Libraries:** Pundit (authorization)
- **Dependencies:** pg (PostgreSQL adapter)
- **Frontend:** ERB (Embedded Ruby templates)
- **Backend APIs:** REST (FHIR standard for healthcare data)
- **Webhooks:** Epic FHIR (patient admission events)
- **Cron Jobs:** Sidekiq (batching insurance-claim submissions)

**Tool glossary**

Rails emphasizes convention over configuration; Pundit manages authorization policies; Sidekiq processes background jobs using Redis.

**3 in-depth use cases**

1. Securely sharing patient X-rays between hospital departments.
2. Auto-generating billing codes from clinical notes.
3. Sending appointment reminders through SMS.

### 11. C++ Multiplayer Game Backend

- **Frameworks:** Unreal Engine (Client Frontend), PlayFab (Backend as a Service)
- **Libraries:** PhysX (physics simulation)
- **Dependencies:** Steamworks SDK (Steam integration)
- **Frontend:** Unreal Engine 5 (3D rendered environment)
- **Backend APIs:** PlayFab CloudScript (server-side game logic)
- **Webhooks:** Steamworks (achievement unlocks and friend invites)
- **Cron Jobs:** Unreal Timer Manager (in-game match reset timers)

**Tool glossary**

PlayFab handles player authentication and leaderboards; PhysX calculates collisions and physics; Steamworks connects the game to Steam services.

**3 in-depth use cases**

1. Synchronizing player positions in a 100-player battle royale.
2. Processing in-game currency transactions securely.
3. Running daily tournaments and distributing rewards.

### 12. Scala High-Fidelity Music Streaming

- **Frameworks:** React (Frontend), Akka HTTP (Backend)
- **Libraries:** Howler.js (audio playback)
- **Dependencies:** Slick (database access)
- **Frontend:** React (component-based UI)
- **Backend APIs:** REST (fetching playlists and metadata)
- **Webhooks:** Spotify (user playlist changes)
- **Cron Jobs:** Akka Quartz (rotating audio CDN cache)

**Tool glossary**

Akka uses the Actor model for highly concurrent, fault-tolerant systems; Howler.js handles browser audio playback; Slick provides functional relational mapping.

**3 in-depth use cases**

1. Streaming lossless FLAC audio to audiophiles.
2. Creating collaborative playlists where multiple users edit simultaneously.
3. Analyzing listening habits to generate personalized daily mixes.

### 13. PHP Global Travel Booking Engine

- **Frameworks:** Blade (Frontend), Laravel (Backend)
- **Libraries:** Carbon (date manipulation)
- **Dependencies:** Guzzle (HTTP client)
- **Frontend:** Blade (Laravel's templating engine)
- **Backend APIs:** REST (searching flights and hotels)
- **Webhooks:** PayPal (booking-payment confirmations)
- **Cron Jobs:** Laravel Scheduler (canceling unpaid reservations after 15 minutes)

**Tool glossary**

Laravel provides routing, database, and application tooling; Carbon simplifies dates and timezones; Guzzle handles outbound HTTP API calls.

**3 in-depth use cases**

1. Aggregating flight prices from multiple airline APIs.
2. Holding a hotel room for 15 minutes while payment details are entered.
3. Sending automated PDF itineraries after booking.

### 14. Kotlin Gen-Z Social Media App

- **Frameworks:** Jetpack Compose (Frontend), Ktor (Backend)
- **Libraries:** Coil (image loading)
- **Dependencies:** Exposed (Kotlin SQL library)
- **Frontend:** Jetpack Compose (declarative Android UI)
- **Backend APIs:** REST (fetching social feeds)
- **Webhooks:** Firebase (push notifications for likes/comments)
- **Cron Jobs:** Kotlinx Coroutines (delayed story expiration)

**Tool glossary**

Jetpack Compose builds Android UIs through Kotlin code; Ktor is a lightweight asynchronous Kotlin server; Coil efficiently loads and caches images.

**3 in-depth use cases**

1. Implementing an infinite-scrolling video feed.
2. Auto-deleting ephemeral stories after 24 hours.
3. Filtering toxic comments with on-device machine learning.

### 15. Dart Hyper-Local Weather Aggregator

- **Frameworks:** Flutter (Frontend), GraphQL (Backend schema)
- **Libraries:** Provider (state management)
- **Dependencies:** Hive (local NoSQL database)
- **Frontend:** Flutter (cross-platform mobile/web UI)
- **Backend APIs:** GraphQL (fetching complex, nested weather data)
- **Webhooks:** OpenWeather (severe-weather alerts)
- **Cron Jobs:** Workmanager (fetching background weather updates)

**Tool glossary**

Flutter renders UI through its own graphics pipeline; GraphQL lets clients request exactly the data they need; Hive stores data locally on the device.

**3 in-depth use cases**

1. Displaying minute-by-minute precipitation radar.
2. Sending push notifications when a severe-weather warning is issued.
3. Caching weather data offline for hikers in remote areas.

### 16. Swift Apple Health Fitness Tracker

- **Frameworks:** SwiftUI (Frontend), Vapor (Backend)
- **Libraries:** Swift Charts (data visualization)
- **Dependencies:** HealthKit (Apple health framework)
- **Frontend:** SwiftUI (declarative UI for the Apple ecosystem)
- **Backend APIs:** REST (syncing workout history)
- **Webhooks:** Apple Health (new workout-session completed)
- **Cron Jobs:** BackgroundTasks (syncing daily step counts)

**Tool glossary**

Vapor is a server-side Swift framework; HealthKit provides structured access to supported health and fitness data; Swift Charts creates native charts.

**3 in-depth use cases**

1. Tracking heart-rate zones during a marathon.
2. Syncing workout data from Apple devices to a secure portal.
3. Gamifying daily step goals with friend leaderboards.

### 17. Haskell Secure Document Management

- **Frameworks:** Elm (Frontend), Yesod (Backend)
- **Libraries:** Aeson (JSON parsing)
- **Dependencies:** Persistent (type-safe database)
- **Frontend:** Elm (functional, strictly typed frontend)
- **Backend APIs:** REST (document CRUD operations)
- **Webhooks:** DocuSign (contract-signature completions)
- **Cron Jobs:** Clock (auditing document-access logs)

**Tool glossary**

Elm emphasizes strong compile-time guarantees on the frontend; Yesod uses Haskell's type system to define web applications; Persistent provides type-safe database persistence.

**3 in-depth use cases**

1. Managing legally binding digital contracts.
2. Building a strongly typed document portal.
3. Automatically redacting sensitive PII from uploaded PDFs.

### 18. TypeScript Global Event Ticketing

- **Frameworks:** SolidJS (Frontend), NestJS (Backend)
- **Libraries:** QRCode (ticket generation)
- **Dependencies:** Prisma (ORM)
- **Frontend:** SolidJS (fine-grained reactivity)
- **Backend APIs:** REST (purchasing tickets)
- **Webhooks:** Eventbrite (ticket-transfer events)
- **Cron Jobs:** Node-schedule (releasing held tickets back to the pool)

**Tool glossary**

SolidJS uses fine-grained reactivity; NestJS provides a modular TypeScript backend architecture; Prisma generates a type-safe database client.

**3 in-depth use cases**

1. Handling massive traffic spikes during major ticket launches.
2. Generating dynamic QR codes for entry scanning.
3. Preventing scalping through account and purchase limits.

### 19. F# Community Recipe Sharing Platform

- **Frameworks:** Avalonia (Desktop Frontend), Saturn (Backend)
- **Libraries:** FSharp.Data (type providers for data)
- **Dependencies:** Giraffe (ASP.NET Core middleware)
- **Frontend:** Avalonia (cross-platform desktop UI)
- **Backend APIs:** REST (recipe search and submission)
- **Webhooks:** TastyIgniter (food-delivery integration)
- **Cron Jobs:** FSharp.Quartz (weekly newsletter generation)

**Tool glossary**

Avalonia builds cross-platform desktop UIs; Saturn brings functional programming patterns to web backends; FSharp.Data can generate strongly typed representations from structured data samples.

**3 in-depth use cases**

1. Scaling recipes dynamically from 4 servings to 12.
2. Generating nutritional labels from ingredient lists.
3. Building a desktop app for chefs to manage kitchen inventory.

### 20. Zig Satellite Telemetry Receiver

- **Frameworks:** Qwik (Frontend), Zig HTTP (Backend)
- **Libraries:** Zig std.math (calculations)
- **Dependencies:** Zig standard library (zero external dependency requirement)
- **Frontend:** Qwik (resumability-oriented UI)
- **Backend APIs:** REST (downloading telemetry packets)
- **Webhooks:** AWS SNS (satellite anomaly alerts)
- **Cron Jobs:** Zig cron scheduling (pinging satellite every 5 minutes)

**Tool glossary**

Zig is designed for low-level systems programming with explicit control over memory; Qwik focuses on resumable web applications; AWS SNS routes alerts to subscribed systems.

**3 in-depth use cases**

1. Decoding raw binary telemetry from low-earth orbit satellites.
2. Monitoring solar-panel voltage and battery health in space.
3. Automatically triggering corrective procedures when telemetry crosses defined boundaries.

---

## Part 3 — The Mental Model

### The 5-Step Translation Framework

To turn a problem into a software solution, translate it through five questions.

#### 1. Identify the Actor — Frontend

**Who is using this? What do they see?**

Choose the UI framework or interface appropriate to that actor.

#### 2. Identify the Action — Backend API

**What are they trying to do?**

Choose a backend architecture and API style that can perform the action.

#### 3. Identify the Memory — Dependencies and Libraries

**What data needs to be saved, and what math or logic is required?**

Choose data stores, persistence layers, and libraries for the required computation.

#### 4. Identify the Triggers — Webhooks

**What external events happen to us?**

Choose the integrations that can push those events into your system.

#### 5. Identify the Routines — Cron Jobs

**What needs to happen automatically without human intervention?**

Choose the scheduling mechanism for recurring or time-based work.

---

## The Golden Rule

> **Frameworks** hold your code together.  
> **Libraries** do the heavy lifting.  
> **Dependencies** are the foundation.  
> **Frontends** talk to humans.  
> **APIs** talk to machines.  
> **Webhooks** react to the outside world.  
> **Cron Jobs** manage the passage of time.

Master these seven pieces and you can approach almost any software problem as a system-design problem.

---

## Why These 20 Projects Exist

These projects are meant to be shared freely with software communities as a practical learning path. Each project changes the domain, architecture, language, and operational constraints so that the learner is forced to recognize the underlying patterns rather than memorize one stack.

The objective is not to master 20 frameworks individually. The objective is to develop the instincts to move from:

**problem → actor → action → memory → trigger → routine → working system**

That is the architectural muscle behind independent building and solopreneurship.

> **Learn the pieces. Build the systems. Ship the work.**
