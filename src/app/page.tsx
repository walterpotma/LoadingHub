import Image from "next/image";
import Cube from "../components/cube/app";

export default function Home() {
    return (
        <div className="relativem-10 flex flex-direction flex-col items-center justify-center">
            <div className="translate-y-6 z-20">
                <Cube />
            </div>
            <div className="absolute top-25.5 z-10">
                <Cube />
            </div>
            <div className="flex">
                <div className="translate-x-14.5 z-20">
                    <Cube />
                </div>
                <div className="-translate-x-14.5 z-20">
                    <Cube />
                </div>
            </div>
        </div>
    );
}
