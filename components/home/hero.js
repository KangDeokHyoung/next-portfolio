import Link from 'next/link';
import Animation from './animation';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    안녕하세요 프론트엔드 덕구입니다.
                    <br className="hidden lg:inline-block" />
                    오늘도 빡코딩!! 화이팅!
                </h1>
                <p className="mb-8 leading-relaxed">
                    제1항의 탄핵소추는 국회재적의원 3분의 1 이상의 발의가 있어야
                    하며, 그 의결은 국회재적의원 과반수의 찬성이 있어야 한다.
                    다만, 대통령에 대한 탄핵소추는 국회재적의원 과반수의 발의와
                    국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 국가는
                    지역간의 균형있는 발전을 위하여 지역경제를 육성할 의무를
                    진다. 모든 국민은 법률이 정하는 바에 의하여 납세의 의무를
                    진다. 대법원에 대법관을 둔다. 다만, 법률이 정하는 바에
                    의하여 대법관이 아닌 법관을 둘 수 있다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            프로젝트 보러가기
                        </button>
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
