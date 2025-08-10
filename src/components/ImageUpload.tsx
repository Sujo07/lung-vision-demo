import React, { useState, useCallback } from 'react';
import { Upload, Image as ImageIcon, X, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ImageUploadProps {
  onImageUpload: (file: File) => void;
  uploadedImage: string | null;
  onClearImage: () => void;
  isProcessing?: boolean;
}

export const ImageUpload = ({ onImageUpload, uploadedImage, onClearImage, isProcessing }: ImageUploadProps) => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
      }
    }
  }, [onImageUpload]);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith('image/')) {
        onImageUpload(file);
      }
    }
  }, [onImageUpload]);

  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Upload Medical Image
            </h3>
            <p className="text-sm text-muted-foreground">
              Upload chest X-ray or CT scan for lung cancer detection
            </p>
          </div>

          {!uploadedImage ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`
                relative border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300
                ${isDragOver 
                  ? 'border-primary bg-primary/5 scale-105' 
                  : 'border-border hover:border-primary/50 hover:bg-primary/5'
                }
                ${isProcessing ? 'opacity-50 pointer-events-none' : 'cursor-pointer'}
              `}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileInput}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                disabled={isProcessing}
              />
              
              <div className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Drop your image here or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Supports: JPEG, PNG, WebP (Max 10MB)
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-muted">
                <img
                  src={uploadedImage}
                  alt="Uploaded medical image"
                  className="w-full h-48 object-cover"
                />
                <Button
                  onClick={onClearImage}
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8"
                  disabled={isProcessing}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="flex items-center justify-center text-sm text-success">
                <FileCheck className="w-4 h-4 mr-2" />
                Image uploaded successfully
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};