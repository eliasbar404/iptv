import { Head } from "@inertiajs/react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <Head title="Not Found">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link rel="icon" type="image/png" href="../../../public/MyStream-TV.ico" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
      <div className="text-center p-6 max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404 - Oops!</h1>
        <p className="text-lg text-gray-600 mb-6">
          The page you're looking for can't be found.
        </p>
        <a
          href="/"
          className="text-blue-500 hover:underline text-lg"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;