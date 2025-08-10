import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Users, Home } from 'lucide-react';

interface ApplyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplyDialog = ({ open, onOpenChange }: ApplyDialogProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-foreground">
            Choose Your Path
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid gap-4 py-6">
          {/* Apply as Tenant */}
          <Button
            onClick={() => scrollToSection('tenant-info')}
            variant="outline"
            className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-primary/5 border-2 hover:border-primary/20 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">Apply as Tenant</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Get instant deposit coverage for your rental
              </p>
            </div>
          </Button>

          {/* Partner as Owner */}
          <Button
            onClick={() => scrollToSection('owner-info')}
            variant="outline"
            className="h-auto p-6 flex flex-col items-center gap-3 hover:bg-secondary/5 border-2 hover:border-secondary/20 transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
              <Home className="w-6 h-6 text-secondary" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-lg text-foreground">Partner as Owner</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Join our network of property owners
              </p>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyDialog;