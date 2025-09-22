import { Facebook, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-200 border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-3 h-3 bg-white transform rotate-45"></div>
              </div>
              <span className="font-bold text-lg text-gray-800">E-Comm</span>
            </div>
            <p className="text-sm text-gray-800 mb-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Follow Us</h3>
            <p className="text-sm text-gray-700 mb-4">
              Since the 1500s, when an unknown printer took a galley of type and scrambled.
            </p>
            <div className="flex space-x-3">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-600 hover:text-blue-400 cursor-pointer" />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Contact Us</h3>
            <div className="space-y-1 text-sm text-gray-700">
              <p>E-Comm , 4578</p>
              <p>Marmara Road,</p>
              <p>Glasgow D04 89GR</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Information */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Information</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Service */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Service</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">My Account</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Our Offers */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-800">Our Offers</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-600">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white flex justify-between items-center">
          <p className="text-sm text-gray-600">© 2018 Ecommerce theme by www.bisenbaev.com</p>

          <div className="flex space-x-4 items-center">
            <img src="/visa-logo.png" alt="Visa" className="h-8 w-auto" />
            <img src="/paypal-logo.png" alt="PayPal" className="h-8 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  )
}
