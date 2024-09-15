import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const PropertyGoBack = () => {
    return ( 
        <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="ml-2" />
             بازگشت به املاک
          </Link>
        </div>
      </section>
     );
}
 
export default PropertyGoBack;