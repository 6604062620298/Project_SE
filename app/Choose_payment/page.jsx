'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  return (
    <div className="p-6 bg-base-200 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full">
        <h1 className="text-4xl font-bold text-primary text-center py-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Choose a Payment
        </h1>
        <div className="p-6 space-y-6 text-center">
          <div className="flex justify-center">
            <img
              src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.15752-9/464679391_959081698979518_7550353312822005801_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ovFKkwnO_pkQ7kNvgGDGxHn&_nc_oc=AdgcrVfZoZP1W1mGTjn6zbfWzKXjoXSFstLT8RvnG_xY14VoAeg7kubXXQ7w9W608hE&_nc_zt=23&_nc_ht=scontent.fbkk5-3.fna&oh=03_Q7cD1gF2d8MktzWT8PTLQ1pq_MesPIzw3KU7NWIMO_jY1f-0DQ&oe=67A36893"
              alt="QR Code"
              className="rounded-lg shadow-md w-64 h-64 object-contain border border-gray-300"
            />
          </div>
          <div className="text-lg font-medium text-gray-700">
            <p>💳 <span className="font-semibold">ธนาคาร:</span> ออมสิน</p>
            <p>🏦 <span className="font-semibold">เลขบัญชี:</span> 020-100-625-777</p>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={() => router.back()}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-md"
            >
              ← ย้อนกลับ
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md">
              ชำระเงินทันที
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
