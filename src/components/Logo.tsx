import logo from "./../logo.png";

function Logo() {
    return (
        <div className="w-auto flex items-center justify-between">
            <img height={45} width={65} src={logo} />
            <svg width="150" height="60" viewBox="0 0 296 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.6 85.8L3.8 90.4C5.33333 93.4667 7.3 96.3667 9.7 99.1C12.1667 101.767 15 103.933 18.2 105.6C21.4667 107.2 25 108 28.8 108C31.6 108 34.2667 107.533 36.8 106.6C39.4 105.667 41.7 104.333 43.7 102.6C45.7667 100.867 47.3667 98.7667 48.5 96.3C49.7 93.8333 50.3 91.0667 50.3 88C50.3 84.8 49.7333 82.0667 48.6 79.8C47.4667 77.4667 46 75.5 44.2 73.9C42.4667 72.2333 40.5667 70.8667 38.5 69.8C36.4333 68.7333 34.4667 67.8667 32.6 67.2C28.5333 65.8 25.3 64.4 22.9 63C20.5667 61.5333 18.9 60 17.9 58.4C16.9 56.7333 16.4 54.9333 16.4 53C16.4 50.7333 17.2667 48.7 19 46.9C20.7333 45.0333 23.5 44.1 27.3 44.1C30.0333 44.1 32.3333 44.6333 34.2 45.7C36.1333 46.7667 37.7667 48.1333 39.1 49.8C40.4333 51.4667 41.5333 53.1667 42.4 54.9L49.7 50.7C48.5667 48.2333 47 45.9 45 43.7C43 41.4333 40.5667 39.6 37.7 38.2C34.9 36.7333 31.6 36 27.8 36C23.8667 36 20.3667 36.8 17.3 38.4C14.2333 39.9333 11.8333 42.0667 10.1 44.8C8.36667 47.5333 7.5 50.6333 7.5 54.1C7.5 57.3 8.1 60 9.3 62.2C10.5667 64.4 12.1667 66.2667 14.1 67.8C16.0333 69.2667 18.0667 70.5 20.2 71.5C22.3333 72.4333 24.2667 73.2 26 73.8C28.6667 74.7333 31.1667 75.8 33.5 77C35.9 78.1333 37.8333 79.6333 39.3 81.5C40.7667 83.3667 41.5 85.8667 41.5 89C41.5 92.2 40.3667 94.8333 38.1 96.9C35.8333 98.9667 32.8333 100 29.1 100C26.3 100 23.8 99.4 21.6 98.2C19.4 97 17.4 95.3333 15.6 93.2C13.8667 91.0667 12.2 88.6 10.6 85.8ZM58.5852 107V99.6L82.1852 70.1L59.5852 43.1V35.6H106.885V43.6H81.1852C79.7185 43.6 77.9185 43.6 75.7852 43.6C73.7185 43.6 72.1518 43.5667 71.0852 43.5L91.5852 67.8V70.5L68.8852 99C71.4185 99 73.8518 99 76.1852 99C78.5852 98.9333 81.1185 98.9 83.7852 98.9H108.085V107H58.5852ZM145.012 91.2L122.012 37H112.512L145.012 110.5L177.512 37H168.012L145.012 91.2ZM195.727 59.7L218.527 100.5L241.327 59.7L246.527 107H255.027L246.527 33.5L218.527 84.2L190.527 33.5L182.027 107H190.527L195.727 59.7Z" fill="white" />
                <line x1="123.03" y1="57" x2="166.126" y2="57" stroke="white" strokeWidth="10" />
            </svg>
        </div>
    );
}

export default Logo;
