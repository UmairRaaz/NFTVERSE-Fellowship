"use client";
import "../globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/Sections/Footer";
import React, { useState, useEffect } from "react";
import {  ProgressBar } from "react-loader-spinner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <ProgressBar
            visible={true}
            height="80"
            width="80"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
      )}
    </div>
  );
}
