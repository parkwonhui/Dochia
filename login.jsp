<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
  String id = request.getParameter("id");
 String pass = request.getParameter("pass"); 

 System.out.println(id+" "+pass);
 if(id.equals("aaa11") && pass.equals("aaa11")){
  out.print("1");
 }else{
  out.print("0");
 }
%>
