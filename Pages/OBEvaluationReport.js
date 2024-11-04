import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart, PieChart } from 'react-native-gifted-charts';
const screenWidth = Dimensions.get("window").width;
export default class OBEvaluationReport extends Component {
  render() {
    const courseOutcomes = [["CO2", "CO4", "CO5"], ["CO7", "CO13", "CO14"]];
    const mappedCourses = ["PO7", "PO10", "PO12", "PO8", ];
    const evaluationData = [
      { title: 'Assignment', total: 4, completed: 3 },
      { title: 'Quiz', total: 9, completed: 6 },
      { title: 'Lab', total: 3, completed: 3 },
      { title: 'Presentation', total: 9, completed: 6 },
      { title: 'Viva', total: 1, completed: 0 },
    ];
    // Data for the Bar Chart
    const barChartData = [
      { value: 90, label: "CO1", frontColor: '#92b37c' },
      { value: 18, label: "CO2", frontColor: '#7b93ad' },
      { value: 65, label: "CO3", frontColor: '#83af9e' },
      { value: 50, label: "CO4", frontColor: '#7b93ad' },
      { value: 95, label: "CO5", frontColor: '#9894c7' },
      { value: 55, label: "CO6", frontColor: '#bb9ad1' },
      { value: 75, label: "CO7", frontColor: '#a97993' },
      { value: 100, label: "CO8", frontColor: '#a777b1' },
      { value: 75, label: "CO9", frontColor: '#a67976' },
      { value: 80, label: "CO10", frontColor: '#dac687' },
    ];
    // Data for the Pie Chart (replacing ProgressChart)
    const pieChartData = [
      { value: 45, color: '#4CAF50', text: '80% Above' },
      { value: 25, color: '#a0c486', text: '70% - 80%' },
      { value: 32, color: '#789366', text: '60% - 70%' },
    ];
    // Data for Evaluation Progress (using donut style for progress visualization)
    const evaluationProgressData = [
      { value: 5, color: '#4CAF50' },
      { value: 12, color: '#E0E0E0' },
    ];
    return (
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('CourseEvaluationReport')}>
            <Text style={styles.link}>Course Evaluation Report</Text>
          </TouchableOpacity>
        </View>
        {/* Course Information */}
        <View style={styles.infoContainer}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Code</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>BA3102</Text>
            </View>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Name</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>Quantitative Techniques</Text>
            </View>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Type</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>Program Elective</Text>
            </View>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Period</Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>Semester - <Text style={{ color: '#3c4049' }}>I</Text></Text>
            </View>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Credits (4)</Text>
            <Text style={styles.infoValue}>Lecture - <Text style={{ color: '#42454b' }}>3</Text></Text>
            <Text style={styles.infoValue}>Tutorial - <Text style={{ color: '#42454b' }}>0</Text></Text>
            <Text style={styles.infoValue}>Practical - <Text style={{ color: '#42454b' }}>1</Text></Text>
            <View style={styles.underline}>
              <Text style={styles.infoValue}>Project - <Text style={{ color: '#42454b' }}>0</Text></Text>
            </View>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Course Outcomes (COs)</Text>
            {courseOutcomes.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.courseOutcomeRow}>
                {row.map((outcome, index) => (
                  <View key={index} style={styles.courseOutcome}>
                    <Text style={styles.courseOutcomeText}>{outcome}</Text>
                  </View>
                ))}
              </View>
            ))}
            <View style={styles.underline}></View>
          </View>
<View style={styles.infoBlock}>
            <Text style={styles.infoLabel}>Mapped to this Course</Text>
            <View style={styles.mappedCourseContainer}>
              {mappedCourses.map((outcome, index) => (
                <View key={index} style={[styles.mappedCourse, { flexBasis: `${100 / 4}%` }]}>
                  <Text style={styles.mappedCourseText}>{outcome}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
        {/* Statistics */}
        <View style={styles.statsContainer}>
          <View style={styles.statValueContainer}>
            <Text style={styles.statLabel}>Total Students</Text>
            <Text style={styles.statValue}>102</Text>
          </View>
          <View style={styles.statValueContainer}>
            <Text style={styles.statLabel}>Course Average Mark</Text>
            <Text style={styles.statValue}>85%</Text>
          </View>
        </View>
        {/* Evaluation Status in Table Format */}
        <View style={styles.evaluationContainer}>
          <Text style={styles.sectionTitle}>Evaluation Status</Text>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Category</Text>
            <Text style={styles.tableHeaderText}>Total</Text>
            <Text style={styles.tableHeaderText}>Completed</Text>
          </View>
          {evaluationData.map((item, index) => (
            <View key={index} style={styles.tableRow}>
              <Text style={styles.tableCell}>{item.title}</Text>
              <Text style={styles.tableCell}>{item.total}</Text>
              <Text style={styles.tableCell}>{item.completed}</Text>
            </View>
          ))}
        </View>
        {/* Course Outcome Attainments */}
        <View style={styles.chartContainer}>
          <Text style={styles.sectionTitle}>Course Outcome Attainments</Text>
          <BarChart
            data={barChartData}
            barWidth={20}
            noOfSections={4}
            maxValue={100}
            yAxisLabelTexts={['0%', '25%', '50%', '75%', '100%']}
            hideRules
            frontColor="#008080"
            width={screenWidth - 60}
            height={220}
            yAxisLabel="%"
            yAxisThickness={0}
            xAxisThickness={0}
          />
        </View>
        {/* Overall Course Outcome Attainment */}
        <View style={styles.chartContainer}>
          <Text style={styles.sectionTitle}>Overall Course Outcome Attainment</Text>
          <View style={styles.chartRow}>
          <View style={{ alignItems: 'center' }}>
          <PieChart
            data={pieChartData}
            donut
            innerRadius={50}
            radius={80}
            textColor="black"
            textSize={14}
            showText
            width={150}
            height={150}
            text={'Total Students\n102'}
            textStyle={{ fontSize: 16 }}
          />
        <View style = {styles.legendContainer}>
          {pieChartData.map((item, index) => (
            <View key = {index} style = {styles.legendItem}>
               <View style={[styles.legendColorBox, { backgroundColor: item.color }]} />
                   <Text style={styles.legendLabel}>{item.text}</Text>
        </View>
          ))}
        </View>
        </View>
        <View style={{ alignItems: 'center', marginLeft: 20 }}>
              <PieChart
                data={evaluationProgressData}
                donut
                innerRadius={50}
                radius={80}
                textColor="black"
                textSize={16}
                showText
                text={'5/12'}
                textStyle={{ fontSize: 18 }}
                width={150}
                height={150}
              />
<Text style={styles.progressLabel}>Evaluation Progress</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  link: {
    color: '#007AFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  infoContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  infoBlock: {
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3c4049',
  },
  underline: {
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingBottom: 8,
  },
  mappedCourseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#939697',
    marginTop: 5,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  statValueContainer: {
    backgroundColor: '#d8d9dd',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
  },
  statLabel: {
    fontSize: 14,
    color: '#3e424d',
    textAlign: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  evaluationContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  chartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  legendContainer: {
    marginTop: 10,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  legendColorBox: {
    width: 12,
    height: 12,
    marginRight: 6,
  },
  legendLabel: {
    fontSize: 12,
    color: '#333',
  },
  progressLabel: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    marginTop: 5,
  },
  courseOutcomeRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    marginVertical:10,
  },
  courseOutcome: {
    flex: 1,
    backgroundColor: '#a8c690', 
    borderWidth: 1,
    borderColor: '#a8c690',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  courseOutcomeText: {
    color: '#415b38',
    fontWeight: '600',
  },
  mappedCourseRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 5,
    marginVertical:10,

  },
  mappedCourse: {
    backgroundColor: '#326695',
    borderWidth: 1,
    borderColor: '#326695',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    margin: 5,
    alignItems: 'center',
  },
  mappedCourseText: {
    color:'#cdf1ff'
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 5,
  },
  tableHeaderText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    width: '33%',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  tableCell: {
    fontSize: 14,
    color: '#555',
    width: '33%',
    textAlign: 'center',
  },
  chartContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  chart: {
    marginVertical: 8,
  },
});
















