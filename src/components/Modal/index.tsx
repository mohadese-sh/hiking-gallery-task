"use client";

import { Suspense } from "react";
import { TModalProps } from "./types";
import CloseButton from "./CloseButton";

const Modal = ({ children }: TModalProps) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-lg max-h-[90vh] sm:max-h-[95vh] md:max-w-2xl md:p-6 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Photo Detail</h2>
          <CloseButton />
        </div>

        <Suspense
          fallback={
            <div className="text-center py-10 h-[50vh] w-full bg-gray-300 animate-pulse rounded-md">
              <div className="animate-pulse">
                <div className="w-full h-[300px] max-h-[60vh] bg-gray-200 rounded-md mb-4" />
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
                <div className="h-4 bg-gray-200 rounded w-1/2" />
              </div>
            </div>
          }
        >
          <div className="overflow-auto max-h-[80vh]">{children}</div>
        </Suspense>
      </div>
    </div>
  );
};

export default Modal;
