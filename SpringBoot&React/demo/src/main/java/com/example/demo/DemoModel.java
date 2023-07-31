package com.example.demo;

//롬복 설치 되었는지 확인용(테스팅)
import lombok.Builder;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Builder
@RequiredArgsConstructor
public class DemoModel {

	@NonNull
	private String id;

}
