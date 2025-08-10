import React, { useState, useCallback } from 'react';
import { ProcessingView } from '@/components/ProcessingView';
import { Brain, Activity, Shield } from 'lucide-react';

interface Detection {
  id: string;
  label: string;
  confidence: number;
  bbox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [detectionResults, setDetectionResults] = useState<Detection[] | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingTime, setProcessingTime] = useState<number | undefined>(undefined);

  const handleImageUpload = useCallback((file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    setDetectionResults(null);
    setProcessingTime(undefined);
  }, []);

  const handleClearImage = useCallback(() => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
    }
    setUploadedImage(null);
    setDetectionResults(null);
    setProcessingTime(undefined);
  }, [uploadedImage]);

  const handleProcessImage = useCallback(async () => {
    if (!uploadedImage) return;
    
    setIsProcessing(true);
    const startTime = Date.now();
    
    // Simulate API call to backend with YOLO11 model
    // Replace this with actual API call to your backend
    try {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing time
      
      // Mock detection results - replace with actual API response
      const mockResults: Detection[] = [
        {
          id: '1',
          label: 'Suspicious Mass',
          confidence: 0.85,
          bbox: { x: 120, y: 80, width: 60, height: 45 }
        },
        {
          id: '2',
          label: 'Nodule',
          confidence: 0.72,
          bbox: { x: 200, y: 150, width: 30, height: 25 }
        }
      ];
      
      const endTime = Date.now();
      setProcessingTime(endTime - startTime);
      setDetectionResults(mockResults);
    } catch (error) {
      console.error('Processing failed:', error);
      // Handle error
    } finally {
      setIsProcessing(false);
    }
  }, [uploadedImage]);

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-white shadow-medical border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  YOLO11 Lung Cancer Detection
                </h1>
                <p className="text-sm text-muted-foreground">
                  AI-Powered Medical Image Analysis System
                </p>
              </div>
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
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Description */}
          <div className="text-center max-w-2xl">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              Advanced Lung Cancer Detection Using YOLO11
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Upload chest X-rays or CT scans for automated lung cancer screening. 
              Our AI model analyzes medical images and provides detailed detection results 
              with confidence scores and risk assessments.
            </p>
          </div>

          {/* Processing Interface */}
          <ProcessingView
            uploadedImage={uploadedImage}
            detectionResults={detectionResults}
            isProcessing={isProcessing}
            processingTime={processingTime}
            onImageUpload={handleImageUpload}
            onClearImage={handleClearImage}
            onProcessImage={handleProcessImage}
          />

          {/* Footer Info */}
          <div className="text-center text-sm text-muted-foreground max-w-2xl mt-12">
            <p>
              This is a demonstration system for academic purposes. 
              Always consult with qualified medical professionals for diagnosis and treatment decisions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;