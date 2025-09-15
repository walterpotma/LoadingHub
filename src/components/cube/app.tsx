"use client";
import Losango from "@/components/cube/losango";

export default function App() {
    return (
        <div className="">
            <div className="flex justify-center items-center rotate-0 translate-y-3.5">
                <Losango classname="border-b-34 border-t-34 border-r-59 "/>
                <Losango classname="rotate-180 border-t-34  border-b-34 border-r-59"/>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center rotate-56 translate-x-7.5">
                    <Losango classname="border-b-40 border-t-30 border-r-60" />
                    <Losango classname="rotate-180 border-t-30  border-b-40 border-r-60" />
                </div>
                <div className="flex justify-center items-center rotate-124 -translate-x-7.5">
                    <Losango classname="border-b-30 border-t-40  border-r-60" />
                    <Losango classname="rotate-180 border-t-40  border-b-30 border-r-60" />
                </div>
            </div>
        </div>
    );
}