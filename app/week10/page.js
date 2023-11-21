"use client";

import React, { useState, useEffect } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";


export default function Week10() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    const handleGitHubSignIn = async () => {
        await gitHubSignIn();
    };

    const handleFirebaseSignOut = async () => {
        await firebaseSignOut();
    };

    return (
        <main class="p-6 flex flex-col items-center justify-center min-h-screen bg-sky-200 font-mono">
          {user ? (
            <div class="text-center p-6 shadow rounded-lg border-x-8 border-y-8 bg-sky-100">
              <h1 class="text-3xl font-bold text-blue-900 mb-4">Welcome {user.displayName || user.email}!</h1>
              <div class="my-4">
                <Link href="/week10/shopping-list" class="text-purple-600 font-bold py-2 px-4 rounded-md shadow hover:bg-sky-200">Shopping List</Link>
              </div>
              <button
                onClick={handleFirebaseSignOut}
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md shadow cursor-pointer transition-colors duration-300 ease-in-out">
                Logout
              </button>
            </div>
          ) : (
            <div class="text-center p-6 bg-sky-100 border-x-8 border-y-8 shadow rounded-lg">
              <h1 class="text-3xl font-bold text-blue-900 mb-4">Login to Continue</h1>
              <button
                onClick={handleGitHubSignIn}
                class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-md shadow cursor-pointer transition-colors duration-300 ease-in-out">
                Sign in with GitHub
              </button>
            </div>
          )}
          <div class="hover:text-cyan-500 hover:underline text-center text-lg font-bold font-mono text-blue-900">
                <Link href="../">&lt;- Home</Link>
            </div>
        </main>
      );
    }