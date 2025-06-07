import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShoppingBag, Truck, Zap } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleOrderType = (isDelivery: boolean) => {
    navigate("/menu", { state: { delivery: isDelivery } });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">
                QuickBite Restaurant
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/register">
                <Button variant="ghost">Staff Register</Button>
              </Link>
              <Link to="/login">
                <Button variant="outline">Staff Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Quick & Easy Online Ordering
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Order your favorite food for pickup or delivery. Fast, convenient,
            and delicious!
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="flex items-center bg-blue-600 hover:bg-blue-700"
              onClick={() => handleOrderType(false)}
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Order for Pickup
            </Button>
            <Button
              size="lg"
              className="flex items-center bg-green-600 hover:bg-green-700"
              onClick={() => handleOrderType(true)}
            >
              <Truck className="mr-2 h-5 w-5" />
              Order for Delivery
            </Button>
          </div>
          <div className="mt-8">
            <Link to="/login">
              <Button variant="outline" size="lg">
                Staff Login
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <ShoppingBag className="h-12 w-12 text-blue-600 mb-4" />
              <CardTitle>Easy Ordering</CardTitle>
              <CardDescription>
                Browse our menu and place orders quickly with just a few clicks.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Truck className="h-12 w-12 text-green-600 mb-4" />
              <CardTitle>Pickup & Delivery</CardTitle>
              <CardDescription>
                Choose between convenient pickup or fast delivery to your
                location.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle>Fast Service</CardTitle>
              <CardDescription>
                Quick preparation times and reliable service for your
                satisfaction.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* About */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            About Our Restaurant
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Our Menu
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Fresh, locally sourced ingredients</li>
                <li>• Variety of options for all tastes</li>
                <li>• Vegetarian and vegan options</li>
                <li>• Quick and healthy choices</li>
                <li>• Affordable prices</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Our Service
              </h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Fast pickup and delivery</li>
                <li>• Real-time order tracking</li>
                <li>• Friendly customer service</li>
                <li>• Secure online payments</li>
                <li>• Satisfaction guaranteed</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
