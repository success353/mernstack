import Image from 'next/image'

const Header = () => {
    return (
        <header className="">
            <div>
                <HeaderItem />
            </div>
            <h1>This is the Header</h1>
            <Image src='https://links.papareact.com/ua6' alt='' width={200} height={100} className='object-contain' />
        </header>
    );
}

export default Header;