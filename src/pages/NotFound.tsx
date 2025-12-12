import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        <div className="text-8xl md:text-9xl font-display font-bold text-gradient-primary mb-4">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild className="bg-gradient-primary text-primary-foreground">
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Contact Us
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
