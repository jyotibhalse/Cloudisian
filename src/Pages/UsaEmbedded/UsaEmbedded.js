import React, { useState } from 'react';
import './UsaEmbedded.css';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
 import Embedded from '../../Images/img2.jpg'
 import Iot from '../../Images/img21.jpg';
 import Hardware from'../../Images/img23.jpg';

 const moduleData = [
  {
    title: 'Module 1: C++ Essentials',
    topics: [
      { name: 'Intro, Tools, C++ Importance', hours: 2.4 },
      { name: 'Classes, Constructors, Destructors', hours: 2.6 },
      { name: 'Inheritance, Virtual Functions, Templates', hours: 5 },
      { name: 'Operator Overloading, File Handling', hours: 3 },
      { name: 'Exception Handling, Debugging', hours: 3 },
      { name: 'Practical & Assignments', hours: 5 },
    ],
  },
  {
    title: 'Module 2: Advanced C++',
    topics: [
      { name: 'Name Mangling, extern "C"', hours: 2 },
      { name: 'Composition, Aggregation, Conversion', hours: 3 },
      { name: 'Operator Overloading, Placement New', hours: 3 },
      { name: 'Virtual Tables, RTTI, Specialization', hours: 3 },
      { name: 'Design Patterns & SOLID', hours: 5 },
      { name: 'Valgrind, Unit Testing, Static Analysis', hours: 6.5 },
    ],
  },
  {
    title: 'Module 3: Modern C++',
    topics: [
      { name: 'Modern Syntax & Features', hours: 3 },
      { name: 'Smart Pointers & Lambdas', hours: 2 },
      { name: 'STL Additions, Templates', hours: 2 },
      { name: 'Threads & Concurrency', hours: 2 },
      { name: 'Full Day Evaluation', hours: 8 },
    ],
  },
  {
    title: 'Module 4: Linux Internals - OS Fundamentals',
    topics: [
      { name: 'Linux OS & Architecture', hours: 3 },
      { name: 'Shell, Scripting, File System', hours: 3 },
      { name: 'Booting Process & Run Levels', hours: 2.5 },
      { name: 'Assignments & Practicals', hours: 2 },
    ],
  },
  {
    title: 'Module 5: Linux Programming',
    topics: [
      { name: 'Processes, Fork, Exec, Signals', hours: 5 },
      { name: 'IPC: Shared Mem, Pipes, Queues', hours: 5.5 },
      { name: 'Threads, Mutex, Scheduling', hours: 3.5 },
      { name: 'Sockets, Debugging', hours: 4 },
    ],
  },
  {
    title: 'Module 6: Linux BSP & Drivers',
    topics: [
      { name: 'Bootloaders, DDR, RPI Board', hours: 8 },
      { name: 'Device Drivers & IO Access', hours: 10 },
      { name: 'Kernel Compilation, Yocto', hours: 16 },
      { name: 'Assignments & Recipe Writing', hours: 8 },
    ],
  },
];

const slides = [
  {
    title: 'Embedded System Development Training Overview',
    img: Embedded, // your imported image
    content: (
      <p>
        Comprehensive training in Embedded C++, Linux Internals, ARM Cortex, IoT, and Real-time Systems using tools like Qt, Yocto, and GDB.
      </p>
    ),
  },
  {
    title: 'Course Highlights',
    content: (
      <ul>
        <li>90-hour in-depth training program</li>
        <li>Modules covering Embedded C++, Linux, IoT, ARM Cortex</li>
        <li>Live projects and real-time debugging tools</li>
        <li>Flexible scheduling options</li>
      </ul>
    )
  },
  {
    title: 'Core Modules',
    content: (
      <>
        <h3>1. Embedded C++ Essentials</h3>
        <p>OOP, Constructors/Destructors, Templates, File Handling, Virtual Functions, Exception Handling</p>
        <h3>2. Advanced C++</h3>
        <p>SOLID Principles, Operator Overloading, Memory Leak Detection, Googletest Unit Testing, Valgrind, Clean Code</p>
        <h3>3. Modern C++ (C++11 & 14)</h3>
        <p>Smart Pointers, Lambdas, Variadic Templates, Move Semantics, Concurrency & Threads</p>
        <h3>4. Linux Internals & Programming</h3>
        <p>Shell Scripting, IPC (Shared Memory, Pipes), Socket Programming, Signals, File System, Threads</p>
        <h3>5. Linux BSP & Device Drivers</h3>
        <p>Kernel Module Creation, Yocto Build, U-Boot, Driver Development (I2C, UART, GPIO)</p>
      </>
    )
  },
  {
    title: 'IoT & Cloud Integration',
    content: (
      <ul>
        <li>Protocols: MQTT, AMQP, HTTP, WebSockets</li>
        <li>Hardware: Zigbee, BLE, Wi-Fi</li>
        <li>Cloud: IAAS, PAAS, SAAS</li>
        <li>Web server, security, and encryption concepts</li>
      </ul>
    ),
    img:Iot
  },
  {
    title: 'Hardware & Tools Knowledge',
    content: (
      <>
        <ul>
          <li>Oscilloscope (CRO, DSO), Signal Generator, Multimeter</li>
          <li>Active/Passive Components, Power Supply Implementation</li>
          <li>Bench Setup for ARM Cortex & Linux Boards</li>
        </ul>
      </>
    ),
    img: Hardware
  },
  {
    title: 'Trainer Profile',
    content: (
      <>
        <p>
          <strong>Sunil Singh</strong> – Sr. Software Architect with 15+ years of experience in Embedded Systems. Expert in Linux Device Drivers, Yocto, C/C++, GStreamer, Kernel Programming. Certified in ASPICE, IEC 60601, and FDA standards.
        </p>
      </>
    )
  }
];


const EmbeddedTraining = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="embedded-container space-y-10 p-6 bg-gray-50 min-h-screen">
      <div className="slider-controls flex justify-between mb-6">
        <button onClick={prevSlide} className="bg-blue-700 text-white px-4 py-2 rounded shadow">Previous</button>
        <button onClick={nextSlide} className="bg-blue-700 text-white px-4 py-2 rounded shadow">Next</button>
      </div>

      <div className="embedded-section bg-white p-6 rounded shadow">
  <h2 className="text-2xl font-bold text-blue-800 mb-4">{slides[currentSlide].title}</h2>

  {slides[currentSlide].img && (
    <img
  src={slides[currentSlide].img}
  alt={slides[currentSlide].title}
  className="mb-4 rounded max-w-full h-auto mx-auto embedded-image"
/>

  )}

  <div className="text-gray-700 space-y-2">{slides[currentSlide].content}</div>
</div>


      {moduleData.map((module, index) => (
        <div className="module-box bg-white rounded shadow p-6" key={index}>
          <h3 className="text-xl font-semibold text-blue-900 mb-4">{module.title}</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={module.topics}>
              <XAxis dataKey="name" hide />
              <YAxis />
              <Tooltip />
              <Bar dataKey="hours" fill="#1e40af" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <table className="module-table w-full text-left border mt-4">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">Topic</th>
                <th className="p-2 border">Hours</th>
              </tr>
            </thead>
            <tbody>
              {module.topics.map((topic, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-100">
                  <td className="p-2 border">{topic.name}</td>
                  <td className="p-2 border">{topic.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <div className="embedded-footer text-center mt-10">
        <a
          href="/contact"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-full shadow hover:bg-green-700 transition"
        >
          Contact Us for Enrollment
        </a>
      </div>
    </div>
  );
};

export default EmbeddedTraining;
