import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageUpload } from './ImageUpload';
import { DetectionResults } from './DetectionResults';

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

interface ProcessingViewProps {
  uploadedImage: string | null;
  detectionResults: Detection[] | null;
  isProcessing: boolean;
  processingTime?: number;
  onImageUpload: (file: File) => void;
  onClearImage: () => void;
  onProcessImage: () => void;
}

export const ProcessingView = ({
  uploadedImage,
  detectionResults,
  isProcessing,
  processingTime,
  onImageUpload,
  onClearImage,
  onProcessImage
}: ProcessingViewProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-7xl">
      {/* Left Column - Image Upload and Display */}
      <div className="space-y-4">
        <ImageUpload
          onImageUpload={onImageUpload}
          uploadedImage={uploadedImage}
          onClearImage={onClearImage}
          isProcessing={isProcessing}
        />
        
        {uploadedImage && !isProcessing && (
          <div className="text-center">
            <button
              onClick={onProcessImage}
              className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-medium hover:scale-105 shadow-elevation transition-all duration-300"
            >
              Analyze for Lung Cancer
            </button>
          </div>
        )}
        
        {uploadedImage && (
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Status:</span>
                  <Badge variant={isProcessing ? "secondary" : detectionResults ? "success" : "outline"}>
                    {isProcessing ? "Processing..." : detectionResults ? "Analysis Complete" : "Ready"}
                  </Badge>
                </div>
                
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>• YOLO11 Deep Learning Model</div>
                  <div>• Trained on Medical Imaging Data</div>
                  <div>• High Accuracy Lung Cancer Detection</div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Right Column - Results */}
      <div className="space-y-4">
        <DetectionResults
          results={detectionResults}
          isProcessing={isProcessing}
          processingTime={processingTime}
        />
      </div>
    </div>
  );
};