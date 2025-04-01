
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Activity, ArrowUpRight, RefreshCcw } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Sample data for the charts
const generateChartData = (days = 14, startValue = 5, variance = 2, trend = 0.1) => {
  return Array.from({ length: days }).map((_, i) => {
    // Create a slightly upward trend over time with some randomness
    const value = Math.max(0, Math.min(10, startValue + (i * trend) + (Math.random() * variance - variance / 2)));
    return {
      date: new Date(Date.now() - (days - i - 1) * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      value: parseFloat(value.toFixed(1))
    };
  });
};

// Sample injury data
const injuries = [
  {
    id: 1,
    name: "Shoulder Impingement",
    description: "Right shoulder injury from overuse",
    painData: generateChartData(14, 7, 1.5, -0.2), // Pain decreasing (improving)
    strengthData: generateChartData(14, 3, 1, 0.3), // Strength increasing (improving)
    mobilityData: generateChartData(14, 4, 1, 0.25) // Mobility increasing (improving)
  },
  {
    id: 2,
    name: "Hamstring Strain",
    description: "Left leg injury from running",
    painData: generateChartData(14, 8, 1, -0.15),
    strengthData: generateChartData(14, 4, 0.8, 0.2),
    mobilityData: generateChartData(14, 3, 1.2, 0.18)
  },
  {
    id: 3,
    name: "Lower Back Pain",
    description: "Chronic pain from poor posture",
    painData: generateChartData(14, 6, 1.8, -0.1),
    strengthData: generateChartData(14, 5, 0.7, 0.15),
    mobilityData: generateChartData(14, 4, 1, 0.2)
  }
];

// Chart config for the colors
const chartConfig = {
  pain: {
    label: "Pain",
    theme: {
      light: "hsl(0, 100%, 65%)",
      dark: "hsl(0, 100%, 65%)"
    }
  },
  strength: {
    label: "Strength",
    theme: {
      light: "hsl(120, 100%, 65%)",
      dark: "hsl(120, 100%, 65%)"
    }
  },
  mobility: {
    label: "Mobility",
    theme: {
      light: "hsl(210, 100%, 65%)",
      dark: "hsl(210, 100%, 65%)"
    }
  }
};

const InjuryCard = ({ injury }: { injury: typeof injuries[0] }) => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("pain");

  const refreshData = () => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const getChartData = () => {
    switch (activeTab) {
      case "pain":
        return injury.painData;
      case "strength":
        return injury.strengthData;
      case "mobility":
        return injury.mobilityData;
      default:
        return injury.painData;
    }
  };

  // Calculate if trend is improving or worsening
  const calculateTrend = (data: { date: string; value: number }[]) => {
    if (data.length < 2) return { trend: 0, improving: false };
    
    const first = data[0].value;
    const last = data[data.length - 1].value;
    const trend = last - first;
    
    // For pain, lower is better. For strength and mobility, higher is better
    const improving = activeTab === "pain" ? trend < 0 : trend > 0;
    
    return { trend: Math.abs(trend), improving };
  };

  const { trend, improving } = calculateTrend(getChartData());

  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-muted to-muted/50 pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>{injury.name}</CardTitle>
            <CardDescription>{injury.description}</CardDescription>
          </div>
          <Button variant="outline" size="icon" onClick={refreshData} disabled={loading}>
            {loading ? (
              <RefreshCcw className="h-4 w-4 animate-spin" />
            ) : (
              <RefreshCcw className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="pain">Pain</TabsTrigger>
            <TabsTrigger value="strength">Strength</TabsTrigger>
            <TabsTrigger value="mobility">Mobility</TabsTrigger>
          </TabsList>
          <TabsContent value="pain" className="mt-0">
            <div className="flex items-center mb-2 justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Pain Level</span>
                <span className={`flex items-center text-xs ${improving ? "text-green-500" : "text-red-500"}`}>
                  {trend.toFixed(1)} {improving ? "↓" : "↑"}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">Last 14 days</div>
            </div>
            {loading ? (
              <Skeleton className="h-[180px] w-full rounded-lg" />
            ) : (
              <ChartContainer config={chartConfig} className="h-[180px]">
                <LineChart data={injury.painData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 10 }} 
                    tickFormatter={(value) => value.substring(5)} 
                    interval="preserveStartEnd" 
                  />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 10 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="pain" 
                    stroke="var(--color-pain)" 
                    strokeWidth={2} 
                    dot={false} 
                    activeDot={{ r: 4 }} 
                  />
                </LineChart>
              </ChartContainer>
            )}
          </TabsContent>
          <TabsContent value="strength" className="mt-0">
            <div className="flex items-center mb-2 justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Strength</span>
                <span className={`flex items-center text-xs ${improving ? "text-green-500" : "text-red-500"}`}>
                  {trend.toFixed(1)} {improving ? "↑" : "↓"}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">Last 14 days</div>
            </div>
            {loading ? (
              <Skeleton className="h-[180px] w-full rounded-lg" />
            ) : (
              <ChartContainer config={chartConfig} className="h-[180px]">
                <LineChart data={injury.strengthData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 10 }} 
                    tickFormatter={(value) => value.substring(5)} 
                    interval="preserveStartEnd" 
                  />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 10 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="strength" 
                    stroke="var(--color-strength)" 
                    strokeWidth={2} 
                    dot={false} 
                    activeDot={{ r: 4 }} 
                  />
                </LineChart>
              </ChartContainer>
            )}
          </TabsContent>
          <TabsContent value="mobility" className="mt-0">
            <div className="flex items-center mb-2 justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Mobility</span>
                <span className={`flex items-center text-xs ${improving ? "text-green-500" : "text-red-500"}`}>
                  {trend.toFixed(1)} {improving ? "↑" : "↓"}
                </span>
              </div>
              <div className="text-sm text-muted-foreground">Last 14 days</div>
            </div>
            {loading ? (
              <Skeleton className="h-[180px] w-full rounded-lg" />
            ) : (
              <ChartContainer config={chartConfig} className="h-[180px]">
                <LineChart data={injury.mobilityData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="date" 
                    tick={{ fontSize: 10 }} 
                    tickFormatter={(value) => value.substring(5)} 
                    interval="preserveStartEnd" 
                  />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 10 }} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    name="mobility" 
                    stroke="var(--color-mobility)" 
                    strokeWidth={2} 
                    dot={false} 
                    activeDot={{ r: 4 }} 
                  />
                </LineChart>
              </ChartContainer>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="container pb-16 pt-32">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Recovery Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Track your injuries' progress over time
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="gap-2">
            <Activity className="h-4 w-4" /> 
            <span>Weekly Report</span>
          </Button>
          <Button className="gap-2 bg-gradient-to-r from-brand-purple to-brand-blue text-white hover:opacity-90">
            <ArrowUpRight className="h-4 w-4" />
            <span>New Assessment</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {injuries.map((injury) => (
          <InjuryCard key={injury.id} injury={injury} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
