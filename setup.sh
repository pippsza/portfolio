#!/bin/bash

# Portfolio Quick Start Script
# Run this after cloning/downloading the project

echo "🚀 Portfolio Setup Script"
echo "=========================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm version: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Dependencies installed successfully!"
    echo ""
    echo "🎉 Setup complete!"
    echo ""
    echo "Next steps:"
    echo "  1. Customize your content in src/constants/data.ts"
    echo "  2. Start development server: npm run dev"
    echo "  3. Open http://localhost:4321 in your browser"
    echo ""
    echo "📚 Read IMPLEMENTATION_GUIDE.md for detailed instructions"
    echo ""
    
    # Ask if user wants to start dev server
    read -p "Start development server now? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        npm run dev
    fi
else
    echo "❌ Installation failed. Please check the error messages above."
    exit 1
fi
