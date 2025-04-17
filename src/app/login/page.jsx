import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Card, CardContent } from "@/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function StapelzzzLogin() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center p-6">
      <Card className="w-full max-w-md rounded-2xl shadow-lg">
        <CardContent className="p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center mb-6"
          >
            <Image
              src="/stapelzzz-logo.png"
              alt="Stapelzzz Logo"
              width={60}
              height={60}
              className="mb-2"
            />
            <h1 className="text-2xl font-bold text-blue-900">Welcome to Stapelzzz</h1>
            <p className="text-sm text-blue-700">Where notes worth sharing</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <Input type="email" placeholder="Email" className="w-full" />
            <Input type="password" placeholder="Password" className="w-full" />
            <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-full">
              Login
            </Button>
          </motion.form>

          <div className="mt-4 text-center text-sm text-blue-700">
            Don't have an account? <a href="#" className="text-blue-900 font-semibold">Sign up</a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
