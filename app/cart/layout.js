import Link from "next/link";

export default function CartLayout({ children }) {
    return (
      <div>
        <p>현대카드 무이자이벤트</p>
        {children}
      </div>
    );
  }
  