"use client";

type Props = {classname?: string};

export default function Item({classname}: Props) {
    return (
        <div className={`border-t-transparent border-b-transparent ${classname}`}>

        </div>
    );
}