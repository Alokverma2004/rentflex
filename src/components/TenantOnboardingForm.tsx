import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Home, Mail, Phone, CheckCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  ageGroup: string;
  currentCity: string;
  currentlyRenting: string;
  depositAsked: string;
  rentalChallenges: string[];
  challengeOther: string;
  wouldUseRentFlex: string;
  email: string;
  phoneNumber: string;
}

const TenantOnboardingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    ageGroup: '',
    currentCity: '',
    currentlyRenting: '',
    depositAsked: '',
    rentalChallenges: [],
    challengeOther: '',
    wouldUseRentFlex: '',
    email: '',
    phoneNumber: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleChallengeChange = (challenge: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      rentalChallenges: checked 
        ? [...prev.rentalChallenges, challenge]
        : prev.rentalChallenges.filter(c => c !== challenge)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = {
        ...formData,
        rentalChallenges: formData.rentalChallenges.join(', ') + (formData.challengeOther ? `, Other: ${formData.challengeOther}` : ''),
        timestamp: new Date().toISOString()
      };

      const response = await fetch('https://script.google.com/macros/s/AKfycbxs-4-bSavsFzIG-DeK33i82Undud04WRicz-A5OVrKZbAqgUFQw29cDJlTREc3SBVF9A/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
        mode: 'no-cors'
      });

      setIsSubmitted(true);
      toast({
        title: "Application Submitted! 🎉",
        description: "Our team will reach out when RentFlex launches in your city.",
      });
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md text-center">
          <CardContent className="p-8">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-secondary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Thanks!</h2>
            <p className="text-muted-foreground mb-6">
              Our team will reach out when RentFlex launches in your city.
            </p>
            <Button onClick={() => window.location.href = '/'} className="w-full">
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Home className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Join RentFlex – Make Renting Easy
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            We help students & professionals move in without heavy deposits. Fill the form to get early access.
          </p>
        </div>

        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-center">Early Access Application</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  required
                />
              </div>

              {/* Age Group */}
              <div className="space-y-2">
                <Label>Age Group</Label>
                <Select value={formData.ageGroup} onValueChange={(value) => handleInputChange('ageGroup', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your age group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="18-22">18–22</SelectItem>
                    <SelectItem value="23-28">23–28</SelectItem>
                    <SelectItem value="29-35">29–35</SelectItem>
                    <SelectItem value="35+">35+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Current City */}
              <div className="space-y-2">
                <Label htmlFor="currentCity">Current City</Label>
                <Input
                  id="currentCity"
                  placeholder="e.g., Bangalore, Mumbai, Delhi"
                  value={formData.currentCity}
                  onChange={(e) => handleInputChange('currentCity', e.target.value)}
                  required
                />
              </div>

              {/* Currently Renting */}
              <div className="space-y-3">
                <Label>Are you currently renting?</Label>
                <RadioGroup 
                  value={formData.currentlyRenting} 
                  onValueChange={(value) => handleInputChange('currentlyRenting', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="renting-yes" />
                    <Label htmlFor="renting-yes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="looking" id="renting-looking" />
                    <Label htmlFor="renting-looking">Looking</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="not-renting" id="renting-no" />
                    <Label htmlFor="renting-no">Not Renting</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Deposit Asked */}
              <div className="space-y-2">
                <Label>Deposit Asked</Label>
                <Select value={formData.depositAsked} onValueChange={(value) => handleInputChange('depositAsked', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select deposit range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-25k">Under ₹25k</SelectItem>
                    <SelectItem value="25k-50k">₹25k–₹50k</SelectItem>
                    <SelectItem value="50k-1L">₹50k–₹1L</SelectItem>
                    <SelectItem value="over-1L">Over ₹1L</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Biggest Rental Challenge */}
              <div className="space-y-3">
                <Label>Biggest Rental Challenge (Select all that apply)</Label>
                <div className="space-y-3">
                  {['High Deposit', 'Brokerage Fees', 'Deposit Refund Issues'].map((challenge) => (
                    <div key={challenge} className="flex items-center space-x-2">
                      <Checkbox
                        id={challenge}
                        checked={formData.rentalChallenges.includes(challenge)}
                        onCheckedChange={(checked) => handleChallengeChange(challenge, !!checked)}
                      />
                      <Label htmlFor={challenge}>{challenge}</Label>
                    </div>
                  ))}
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="other"
                      checked={formData.rentalChallenges.includes('Other')}
                      onCheckedChange={(checked) => handleChallengeChange('Other', !!checked)}
                    />
                    <Label htmlFor="other">Other</Label>
                  </div>
                  {formData.rentalChallenges.includes('Other') && (
                    <Input
                      placeholder="Please specify..."
                      value={formData.challengeOther}
                      onChange={(e) => handleInputChange('challengeOther', e.target.value)}
                      className="ml-6"
                    />
                  )}
                </div>
              </div>

              {/* Would Use RentFlex */}
              <div className="space-y-3">
                <Label>Would you use RentFlex if deposit was paid upfront & repaid in EMIs?</Label>
                <RadioGroup 
                  value={formData.wouldUseRentFlex} 
                  onValueChange={(value) => handleInputChange('wouldUseRentFlex', value)}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="definitely-yes" id="use-definitely" />
                    <Label htmlFor="use-definitely">Definitely Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="maybe" id="use-maybe" />
                    <Label htmlFor="use-maybe">Maybe</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="use-no" />
                    <Label htmlFor="use-no">No</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Contact Section */}
              <div className="bg-muted/30 rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Phone Number
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Early Access'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TenantOnboardingForm;