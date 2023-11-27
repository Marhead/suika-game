import React from "react";
import Image from "next/image";

const KeyAlarm: React.FC = () => {
    return (
        <div>
            <div>
                <Image
                    src="/s_key.png"
                    width={32}
                    height={32}
                    alt="S_key"
                /> key: Down
            </div>
            <div>
                <Image
                    src="/a_key.png"
                    width={32}
                    height={32}
                    alt="A_key"
                /> key: Left
            </div>
            <div>
                <Image
                    src="/d_key.png"
                    width={32}
                    height={32}
                    alt="D_key"
                /> key: Right
            </div>
        </div>
    );
}

export default KeyAlarm;