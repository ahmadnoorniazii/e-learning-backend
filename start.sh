#!/bin/bash

# E-Learning Backend Start Script

echo "🚀 Starting E-Learning Backend..."
echo "=================================="

# Check if we're in the correct directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the e-learning-backend directory"
    exit 1
fi

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start the development server
echo "🔄 Starting Strapi development server..."
echo "📍 Backend will be available at: http://localhost:1337"
echo "🔧 Admin panel will be available at: http://localhost:1337/admin"
echo ""
echo "⚠️  Important: Create your first admin user when prompted!"
echo ""

npm run dev
