import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle, Activity, Brain } from 'lucide-react';

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

interface DetectionResultsProps {
  results: Detection[] | null;
  isProcessing: boolean;
  processingTime?: number;
}

export const DetectionResults = ({ results, isProcessing, processingTime }: DetectionResultsProps) => {
  const getRiskLevel = (confidence: number) => {
    if (confidence >= 0.8) return { level: 'High', color: 'destructive', icon: AlertTriangle };
    if (confidence >= 0.5) return { level: 'Medium', color: 'warning', icon: Activity };
    return { level: 'Low', color: 'success', icon: CheckCircle };
  };

  const getOverallRisk = () => {
    if (!results || results.length === 0) return null;
    const maxConfidence = Math.max(...results.map(r => r.confidence));
    return getRiskLevel(maxConfidence);
  };

  if (isProcessing) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="flex items-center justify-center space-x-3">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <div className="text-lg font-medium">Analyzing Image...</div>
          </div>
          <p className="text-center text-muted-foreground mt-2">
            YOLO11 model is processing your medical image
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!results) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <div className="text-center text-muted-foreground">
            <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>Upload an image to start lung cancer detection</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const overallRisk = getOverallRisk();

  return (
    <div className="w-full space-y-4">
      {/* Overall Assessment */}
      <Card className="border-l-4 border-l-primary">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-3">
            <Brain className="w-6 h-6 text-primary" />
            AI Detection Results
          </CardTitle>
        </CardHeader>
        <CardContent>
          {overallRisk && (
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <overallRisk.icon className={`w-5 h-5 ${
                  overallRisk.color === 'destructive' ? 'text-destructive' :
                  overallRisk.color === 'warning' ? 'text-warning' : 'text-success'
                }`} />
                <span className="font-medium">Risk Assessment:</span>
              </div>
              <Badge variant={overallRisk.color as any}>
                {overallRisk.level} Risk
              </Badge>
            </div>
          )}
          
          {processingTime && (
            <div className="text-sm text-muted-foreground">
              Processing time: {processingTime}ms
            </div>
          )}
        </CardContent>
      </Card>

      {/* Detailed Results */}
      <Card>
        <CardHeader>
          <CardTitle>Detected Anomalies</CardTitle>
        </CardHeader>
        <CardContent>
          {results.length === 0 ? (
            <div className="text-center py-8">
              <CheckCircle className="w-12 h-12 mx-auto text-success mb-4" />
              <p className="text-lg font-medium text-success">No anomalies detected</p>
              <p className="text-muted-foreground">The image appears to be normal</p>
            </div>
          ) : (
            <div className="space-y-4">
              {results.map((detection, index) => {
                const risk = getRiskLevel(detection.confidence);
                return (
                  <div
                    key={detection.id || index}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card"
                  >
                    <div className="flex items-center gap-3">
                      <risk.icon className={`w-5 h-5 ${
                        risk.color === 'destructive' ? 'text-destructive' :
                        risk.color === 'warning' ? 'text-warning' : 'text-success'
                      }`} />
                      <div>
                        <p className="font-medium">{detection.label}</p>
                        <p className="text-sm text-muted-foreground">
                          Confidence: {(detection.confidence * 100).toFixed(1)}%
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <Badge variant={risk.color as any}>
                        {risk.level}
                      </Badge>
                      <div className="mt-1">
                        <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className={`h-full transition-all duration-500 ${
                              risk.color === 'destructive' ? 'bg-destructive' :
                              risk.color === 'warning' ? 'bg-warning' : 'bg-success'
                            }`}
                            style={{ width: `${detection.confidence * 100}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};