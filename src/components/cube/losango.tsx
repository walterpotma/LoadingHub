"use client";

type Props = {classname?: string};

export default function Item({classname}: Props) {
    return (
        <div className={`border-t-transparent border-r-blue-500 border-b-transparent ${classname}`}>

        </div>
    );
}