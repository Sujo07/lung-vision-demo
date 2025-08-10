import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Activity, Shield, ArrowRight, Zap, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-medical border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  YOLO11 Lung Cancer Detection
                </h1>
                <p className="text-xs text-muted-foreground">
                  AI-Powered Medical Image Analysis
                </p>
              </div>
            </div>
            
            <Link to="/detection">
              <Button className="bg-gradient-primary">
                Try Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Revolutionizing Lung Cancer
              <span className="bg-gradient-primary bg-clip-text text-transparent"> Detection</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced YOLO11 deep learning model provides accurate, fast, and reliable 
              lung cancer detection from medical imaging. Empowering healthcare professionals 
              with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/detection">
                <Button size="lg" className="bg-gradient-primary text-lg px-8 py-4">
                  Start Analysis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our AI Detection System?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with state-of-the-art technology to deliver precise results for medical professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-elevation">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Get accurate results in seconds with our optimized YOLO11 model architecture
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elevation">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">High Accuracy</h3>
                <p className="text-muted-foreground">
                  Trained on extensive medical datasets with proven accuracy in clinical settings
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-elevation">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">HIPAA Compliant</h3>
                <p className="text-muted-foreground">
                  Secure, privacy-focused design ensuring patient data protection and compliance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Advanced AI Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our system leverages the latest YOLO11 architecture, specifically fine-tuned 
                for medical imaging applications with enhanced detection capabilities.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-foreground">Real-time object detection and localization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-foreground">Confidence scoring for each detection</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-foreground">Support for X-ray and CT scan images</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-primary rounded-full"></div>
                  <span className="text-foreground">Bounding box visualization</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-elevation p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Model Architecture</span>
                  <span className="font-semibold text-foreground">YOLO11</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Training Dataset</span>
                  <span className="font-semibold text-foreground">Medical Imaging</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Processing Time</span>
                  <span className="font-semibold text-foreground">&lt; 3 seconds</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Image Formats</span>
                  <span className="font-semibold text-foreground">JPG, PNG, DICOM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience AI-Powered Detection?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Upload your medical images and see our YOLO11 model in action. 
            Perfect for demonstrations and academic presentations.
          </p>
          <Link to="/detection">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4">
              Try the Demo Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-foreground">YOLO11 Lung Cancer Detection</span>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4" />
                <span>Real-time Analysis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>Academic Use</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>
              This is a demonstration system for academic purposes. 
              Always consult with qualified medical professionals for diagnosis and treatment decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;